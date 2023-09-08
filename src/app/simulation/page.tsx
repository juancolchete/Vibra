"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ethers } from "ethers";
import contracts from "../../contracts.json";

export default function Home() {
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
  const getRawErc20 = async (token:string,amount:string,receiver:string,chainId:number)=>{
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
      nonce: 1122334567789911,
      type: 2,
      chainId,
      data: rawData
    };

    let rawTransaction = await signer.signTransaction(transaction);
    
    console.log('Raw txhash string ' + rawTransaction);
    return rawTransaction;
  }
  return (
     <>
      {wallet.address}
      <button onClick={() => getRawErc20('0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F',"1","0xdC0cD343ebe20cA2ed01986518c3317F72f30447",5)}></button>
    </> 

  )
}

