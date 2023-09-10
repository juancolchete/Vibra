/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./drextransfer.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";
import contracts from "@/contracts.json"
import { useSearchParams } from 'next/navigation';
import { IoArrowUndoOutline } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ethers } from "ethers";
import { decodeFromBase, encodeToBase } from "@/utils/data";
import { chains, cryptoNames, tokens } from "../constants";
import { toast } from "react-toastify";

const DrexTransfer = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
  const balance = useSelector(
    (state: RootState) => state.user.balance
  );
  const [selectedCrypto,setSelectedCrypto] = useState(0)
  const [amountSend,setAmountSend] = useState("0")
  const [receiverAddress,setReceiverAddress] = useState("0x0000000000000000000000000000000000000000")
  const transfer = async () =>{
    if(selectedCrypto == 0){
    }else if(selectedCrypto == 1){
      getRawErc20(tokens[selectedCrypto],ethers.parseEther(amountSend),receiverAddress,chains[selectedCrypto],wallet.nonceLIDO);
    }
  }
  const getRawErc20 = async (token:string,amount:bigint,receiver:string,chainId:number,nonce:number)=>{
    console.log(token,amount,receiver,chainId,nonce)
    const iface = new ethers.Interface(contracts.ERC20_ABI);
    const rawData = iface.encodeFunctionData("transfer",[receiver, amount])
    let signer = ethers.Wallet.fromPhrase(wallet.mnemonic);
    console.log('Using wallet address ' + signer.address);

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
    console.log("integrity",rawTransaction)
    console.log("integrity",rawTransaction == decodedRaw)
    navigator.clipboard.writeText(txnRawEnc);
    toast("Copied sms transaction!");
    sessionStorage.setItem("nonceLIDO",(wallet.nonceLIDO+1).toString())
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6 col-lg-6 offset-md-3   ">
            <div className={styles.content}>
              <Header />
              {/* SECTION */}
              <section>
                <Link href="drex">
                  <button>
                    <IoArrowUndoOutline />
                  </button>
                </Link>
                <Text size="1.125rem" color="#fff">
                  Transfer
                </Text>
              </section>
              {/* CARD */}
              <div className={styles.cards}>
                <Text size="0.875rem" color="#fff" center>
                  Receiver
                </Text>
                <input
                  placeholder="0x6791504a6d9219ca528b333A71b427B4044Fb18a"
                  onChange={(e) => setReceiverAddress(e.target.value)}
                />
                <Text size="0.875rem" color="#fff" center>
                  Select crypto
                </Text>
                <Form.Select aria-label="Default select example"
                    defaultValue={cryptoNames.indexOf(token ? token : "")}
                    onChange={(e) => setSelectedCrypto(parseInt(e.target.value))}>
                  <option value="-1">Select crypto</option>
                  <option value="0">DREX</option>
                  <option value="1">stETH</option>
                  <option value="2">ICP</option>
                  <option value="3">LaChain</option>
                </Form.Select>
                <Text size="0.875rem" color="##fcfcfc66" center>
                  {selectedCrypto == 0 ?
                   "" : selectedCrypto == 1 ?
                   (
                  "Balance:"+balance.stEth+cryptoNames[selectedCrypto]) : ""}
                </Text>
                <Text size="0.875rem" color="#fff" center>
                  Send amount
                </Text>
                <input type="number" placeholder="0.01" onChange={(e) => setAmountSend(e.target.value)} />
                <Link href="wstethtransfer">
                  <Button className="btnBlue" onClick={()=>transfer()}>Transfer crypto</Button>
                </Link>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrexTransfer;
