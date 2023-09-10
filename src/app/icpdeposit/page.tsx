/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./icpdeposit.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const ok = "./alert.png";

const IcpDeposit = () => {
  const [value, setValue] = useState("0x6791504a6d9219ca528b333A71b427B4044Fb18a");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  function loadingBtn() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  const handleCopyClick = () => {
    toast("Copy !");
    const textToCopy = `${value}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
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
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6 col-lg-6 offset-md-3   ">
            <div className={styles.content}>
              <Header />
              {/* SECTION */}
              <section>
                <Link href="drex">
                  <button>
                    <IoArrowUndoOutline />
                  </button>
                </Link>
                <Text size="1.125rem" color="#fff">
                  Deposit with Pix
                </Text>
              </section>
              {/* CARD */}
              <div className={styles.cards}>
                <img src={ok} alt="" />
                <Title size="1.125rem">Deposit error!</Title>
                <Text size="0.875rem" color="##fcfcfc66" center>
                  Something went wrong with your transaction, please check and
                  try again.
                </Text>

                <Link href="wstethbuy">
                  <Button className="btnBlue" onClick={loadingBtn}>
                    Buy whit Pix
                  </Button>
                </Link>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IcpDeposit;
