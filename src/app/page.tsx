"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
  return (
     <>
      {wallet.address}
    </> 

  )
}
