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
    nonceICP:1,
    nonceLAC:1,
    loaded: false,
  },
   balance:{
    drex: 0,
    icp: 0,
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
    setWalletProperty: (state, action: PayloadAction<walletProperty>)=>{
      state.wallet[action.payload.prop] = action.payload.value;
    },
    setBalance: (state, action: PayloadAction<balance>)=>{
      state.balance = action.payload;
    }
  }
});

export const { setWallet , setBalance, setWalletProperty} = userSlice.actions;

export default userSlice.reducer;
