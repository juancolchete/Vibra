import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface user {
  wallet: wallet;
  balance: balance;
}

const initialState: user = {
  wallet:{
    mnemonic: "",
    address: "",
    nonceDREX:1,
    nonceLIDO:1,
    nonceBFT:1,
    noncewDrex:1,
    loaded: false,
  },
   balance:{
    drex: 0,
    BFT: 0,
    wDrex: 0,
    stEth: 0,
  }
};

export const userSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<wallet>) => {
      state.wallet = action.payload;
    },
    setWalletNonce: (state, action: PayloadAction<walletNonce>)=>{
      state.wallet.nonceDREX = action.payload.nonceDREX;
      state.wallet.nonceLIDO = action.payload.nonceLIDO;
      state.wallet.nonceBFT = action.payload.nonceBFT;
      state.wallet.noncewDrex = action.payload.noncewDrex;
    },
    setBalance: (state, action: PayloadAction<balance>)=>{
      state.balance = action.payload;
    }
  }
});

export const { setWallet , setBalance, setWalletNonce} = userSlice.actions;

export default userSlice.reducer;
