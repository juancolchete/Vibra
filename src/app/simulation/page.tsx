"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ethers } from "ethers";
import contracts from "../../contracts.json";
import { useState } from "react";
import { encodeToBase, decodeFromBase } from "@/utils/data";
import * as bip39  from "bip39"

export default function Home() {
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
  const [txnRaw,setTxnRaw] = useState("")
  const getRawErc20 = async (token:string,amount:string,receiver:string,chainId:number,nonce:number)=>{
    console.log(token,amount,receiver,chainId,nonce)
    const iface = new ethers.Interface(contracts.ERC20_ABI);
    const rawData = iface.encodeFunctionData("transfer",[receiver, amount])
    let signer = ethers.Wallet.fromPhrase(wallet.mnemonic);
    let transaction = {
      to: token,
      value: 0,
      gasLimit: '150000',
      maxPriorityFeePerGas: ethers.parseUnits('2', 'gwei'),
      maxFeePerGas: ethers.parseUnits('2', 'gwei'),
      nonce,
      type: 2,
      chainId,
      data: rawData
    };

    let rawTransaction = await signer.signTransaction(transaction);
    let leadingZeros = rawTransaction?.match(/^0*/)?.[0]?.length;
    let encodedRaw = encodeToBase(BigInt(rawTransaction))
    const txnRawEnc = `${leadingZeros},${chainId},${encodedRaw}`
    const decodedRaw = decodeFromBase(encodedRaw,parseInt(`${leadingZeros}`))
    setTxnRaw(txnRawEnc)
    console.log("raw",rawTransaction)
    console.log("txnDec",decodedRaw)
    console.log("integrity",rawTransaction == decodedRaw)
    console.log("integrity",encodedRaw)
    console.log("integrity",encodedRaw.length)
  }

  return (
     <>
      {wallet.address}
      {wallet && wallet.loaded == true ?
      <button onClick={() => getRawErc20('0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F',"1","0xdC0cD343ebe20cA2ed01986518c3317F72f30447",5,wallet.nonceLIDO)}></button>
      :<></>}
      <a href={`sms:+16152859912?&body=`+txnRaw}>[link text]</a>
    </> 

  )
}

