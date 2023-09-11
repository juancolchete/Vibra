export const STETH = process?.env?.NEXT_PUBLIC_STETH ? process.env.NEXT_PUBLIC_STETH : ""; 
export const tokens = ["",STETH];
export const cryptoNames = ["DREX","stETH","BFT","wDrex"];
export const chains = [0,5,355113];
export const GOERLI_RPC = process?.env?.NEXT_PUBLIC_GOERLI_RPC;
export const BITFINITY_RPC = process?.env?.NEXT_PUBLIC_BITFINITY_RPC;
export const SEPOLIA_RPC = process?.env?.NEXT_PUBLIC_SEPOLIA_RPC;
