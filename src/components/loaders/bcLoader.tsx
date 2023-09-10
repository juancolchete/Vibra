
"use client";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { GOERLI_RPC, STETH } from "@/app/constants";
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
    const provider = new ethers.JsonRpcProvider(GOERLI_RPC);
    const loadBalances = async ()=>{
      if(wallet.loaded == true){
        const stEth = new ethers.Contract(STETH,contracts.ERC20_ABI,provider);
        const stEthRawBal = await stEth.balanceOf(wallet.address);
        const stEthBal = Number(ethers.formatEther(stEthRawBal));
        console.log(stEthRawBal)
        dispatch(setBalance({
          drex:0,
          BFT:0,
          LAC:0,
          stEth: stEthBal,
        })) 
      }
    }
    const loadNonce = async ()=>{
      console.log("try load nonce")
      const txnCount = await provider.getTransactionCount(wallet.address);
      dispatch(setWalletNonce({
        nonceDREX:0,
        nonceLIDO:txnCount,
        nonceBFT:0,
        nonceLAC:0
      }))
      localStorage.setItem("nonceLIDO",(txnCount).toString())
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
