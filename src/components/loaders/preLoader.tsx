"use client";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWallet } from "@/store/userSlice";
import { RootState } from "@/store/store";
import * as bip39 from "bip39";
import { validateEthAddress } from "@/utils/validation";

const PreLoader = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
   useEffect(() => {
      if (wallet.loaded == false && localStorage) {
      const address = `${localStorage.getItem("address")}`;   
      if(validateEthAddress(address)){
        dispatch(setWallet({
           mnemonic: `${localStorage.getItem("mnemonic")}`, 
           address,
           nounceDREX: parseInt(`${localStorage.getItem("nounceDREX")}`),
           nounceLIDO: parseInt(`${localStorage.getItem("nounceLIDO")}`),
           nounceICP: parseInt(`${localStorage.getItem("nounceICP")}`),
           nounceLAC: parseInt(`${localStorage.getItem("nounceICP")}`),
           loaded: true 
        })) 
      }else{
        const mnemonic = ethers.Mnemonic.fromPhrase(bip39.generateMnemonic())
        const signer = ethers.HDNodeWallet.fromMnemonic(mnemonic)
        dispatch(setWallet({
           mnemonic: mnemonic.phrase, 
           address: signer.address,
           nounceDREX:1,
           nounceLIDO:1,
           nounceICP:1,
           nounceLAC:1,
           loaded: true 
        }))
        localStorage.setItem("mnemonic",mnemonic.phrase)
        localStorage.setItem("address",signer.address)
        localStorage.setItem("nounceDREX","1")
        localStorage.setItem("nounceLIDO","1")
        localStorage.setItem("nounceICP","1")
        localStorage.setItem("nounceLAC","1")
      }
      }
    }, [dispatch,wallet]);

    return (
      <></>
    );
};

export default PreLoader;
