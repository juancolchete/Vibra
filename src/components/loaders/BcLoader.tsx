"use client";
import { ethers } from "ethers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BITFINITY_RPC, GOERLI_RPC, STETH, wDrex } from "@/app/constants";
import contracts from "@/contracts.json";
import { setBalance, setWalletNonce } from "@/store/userSlice";

export const BcLoader = () => {
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
        const providerSepolia = new ethers.JsonRpcProvider(BITFINITY_RPC);
        const loadBalances = async () => {
            if (wallet.loaded == true) {
                const stEth = new ethers.Contract(STETH, contracts.ERC20_ABI, providerGoerli);
                const wDrexC = new ethers.Contract(wDrex, contracts.ERC20_ABI, providerSepolia);
                const stEthRawBal = await stEth.balanceOf(wallet.address);
                const stEthBal = Number(ethers.formatEther(stEthRawBal));
                const BFTRawBal = await providerBFT.getBalance(wallet.address);
                const BFTBal = Number(ethers.formatEther(BFTRawBal));
                const wDrexRawBal = await wDrexC.balanceOf(wallet.address);
                const wDrexBal = Number(ethers.formatEther(wDrexRawBal));
                dispatch(setBalance({
                    drex: 0,
                    BFT: BFTBal,
                    wDrex: wDrexBal,
                    stEth: stEthBal,
                }));
            }
        };
        const loadNonce = async () => {
            console.log("try load nonce");
            const txnCountGoerli = await providerGoerli.getTransactionCount(wallet.address);
            const txnCountBFT = await providerBFT.getTransactionCount(wallet.address);
            const txnCountSepolia = await providerSepolia.getTransactionCount(wallet.address);
            dispatch(setWalletNonce({
                nonceDREX: 0,
                nonceLIDO: txnCountGoerli,
                nonceBFT: txnCountBFT,
                noncewDrex: txnCountSepolia
            }));
            localStorage.setItem("nonceLIDO", (txnCountGoerli).toString());
            localStorage.setItem("nonceBFT", (txnCountBFT).toString());
        };
        const interval = setInterval(() => {
            loadNonce();
            loadBalances();
        }, 10000);

        return () => clearInterval(interval);
    }, [dispatch, balance, wallet]);

    return (
        <></>
    );
};

