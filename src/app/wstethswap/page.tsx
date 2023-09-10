/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./wstethswap.module.css";
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

const qr = "./qrCode.png";
const money = "./money.png";
const moneyArrow = "./moneyArrow.png";

const Wstethswap = () => {
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
    toast("Copied !");
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
                  Transfer
                </Text>
              </section>
              {/* CARD */}
              <div className={styles.cards}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                >
                  <path
                    d="M45 90C20.1465 90 0 69.8535 0 45C0 20.1465 20.1465 0 45 0C69.8535 0 90 20.1465 90 45C90 69.8535 69.8535 90 45 90ZM40.5135 63L72.3285 31.1805L65.9655 24.8175L40.5135 50.274L27.783 37.5435L21.42 43.9065L40.5135 63Z"
                    fill="#423FFF"
                  />
                </svg>
                <Text size="0.675rem" color="##fcfcfc66" center>
                  Swap confirmed from DREX to ICP, check balance.
                </Text>

                {loading ? (
                  <Button className="btnBlue" onClick={loadingBtn} disabled>
                    <Spinner animation="border" size="sm" variant="light" />
                  </Button>
                ) : (
                  <Button className="btnBlue" onClick={loadingBtn}>
                    Confirm Transaction
                  </Button>
                )}
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wstethswap;
