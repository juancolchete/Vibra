
"use client";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BITFINITY_RPC, GOERLI_RPC, STETH } from "@/app/constants";
import contracts from "@/contracts.json";
import { setBalance, setWalletNonce } from "@/store/userSlice";

const BcLoader = () => {
  const dispatch = useDispatch();
  const balance = useSelector(
    (state: RootState) => state.user.balance
  );
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
   useEffect(() => {
    const providerGoerli = new ethers.JsonRpcProvider(GOERLI_RPC);
    const providerBFT = new ethers.JsonRpcProvider(BITFINITY_RPC);
    const loadBalances = async ()=>{
      if(wallet.loaded == true){
        const stEth = new ethers.Contract(STETH,contracts.ERC20_ABI,providerGoerli);
        const stEthRawBal = await stEth.balanceOf(wallet.address);
        const stEthBal = Number(ethers.formatEther(stEthRawBal));
        const BFTRawBal = await providerBFT.getBalance(wallet.address);  
        const BFTBal = Number(ethers.formatEther(BFTRawBal));
        dispatch(setBalance({
          drex:0,
          BFT:BFTBal,
          LAC:0,
          stEth: stEthBal,
        })) 
      }
    }
    const loadNonce = async ()=>{
      console.log("try load nonce")
      const txnCountGoerli = await providerGoerli.getTransactionCount(wallet.address);
      const txnCountBFT = await providerBFT.getTransactionCount(wallet.address);
      dispatch(setWalletNonce({
        nonceDREX:0,
        nonceLIDO:txnCountGoerli,
        nonceBFT:txnCountBFT,
        nonceLAC:0
      }))
      localStorage.setItem("nonceLIDO",(txnCountGoerli).toString())
      localStorage.setItem("nonceBFT",(txnCountBFT).toString())
    }
    const interval = setInterval(() => {
      loadBalances();
      loadNonce();
    }, 10000);

    return () => clearInterval(interval);
   }, [dispatch,balance,wallet]);

    return (
      <></>
    );
};

export default BcLoader;
