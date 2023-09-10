/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./page.module.css";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ToastContainer, toast } from "react-toastify";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/components/loading/Loading";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const logoG = "./logoG.png";
const cadeado = "./cadeado.png";

export default function Home() {
  const wallet = useSelector((state: RootState) => state.user.wallet);
  const [value, setValue] = useState("0x6791504a6d9219ca528b333A71b427B4044Fb18a");
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  const handleCopyClick = () => {
    toast("Copy !");
    const textToCopy = `${value}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const togglePassword = () => {
    setEyeOpen(!eyeOpen);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="container ">
            <div className="row ">
              <div className="col-md-6 col-lg-6 offset-md-3   ">
                {/* {wallet.address} */}
                <div className={styles.content}>
                  <img src={logoG} alt="Logo" />
                  <img src={cadeado} alt="cadeado" className="mt-2" />

                  <Title size="1.5rem">Copy your seed phrase</Title>

                  <Text size="0.875rem" color="##fcfcfc66" center>
                    Your seed phrase is the only protection for your coins,
                    don't lose it and never pass it on to anyone.
                  </Text>

                  <span className="spanPosition  ">
                    <input
                      type={eyeOpen ? "text" : "password"}
                      className="inputCopy"
                      value={value}
                    />

                    <button className={styles.eye} onClick={togglePassword}>
                      {eyeOpen ? (
                        <AiOutlineEye className={styles.eye} size={20} />
                      ) : (
                        <AiOutlineEyeInvisible
                          className={styles.eye}
                          size={20}
                        />
                      )}
                    </button>
                  </span>

                  <div className={styles.divA}>
                    <Button className="btnBlue" onClick={handleCopyClick}>
                      Copy
                    </Button>
                    <Link href="dashboard">
                      <Button className="btnBlue">Go to home</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
