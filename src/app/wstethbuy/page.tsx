/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./wstethbuy.module.css";
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

const Wstethbuy = () => {
  const [value, setValue] = useState("0x4a4s4dasfasfjhaosjhdoasjdas");
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
                <Title size="1.125rem">Scan QR</Title>
                <Text size="0.875rem" color="##fcfcfc66" center>
                  Scan or copy the code to make the deposit with Pix.
                </Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                >
                  <path
                    d="M108.333 116.667V108.333H83.3333V83.3333H108.333V100H125V116.667H116.667V133.333H100V150H83.3333V125H100V116.667H108.333ZM150 150H116.667V133.333H133.333V116.667H150V150ZM0 0H66.6667V66.6667H0V0ZM16.6667 16.6667V50H50V16.6667H16.6667ZM83.3333 0H150V66.6667H83.3333V0ZM100 16.6667V50H133.333V16.6667H100ZM0 83.3333H66.6667V150H0V83.3333ZM16.6667 100V133.333H50V100H16.6667ZM125 83.3333H150V100H125V83.3333ZM25 25H41.6667V41.6667H25V25ZM25 108.333H41.6667V125H25V108.333ZM108.333 25H125V41.6667H108.333V25Z"
                    fill="#FCFCFC"
                  />
                </svg>
                <Text size="0.675rem" color="##fcfcfc66" center>
                  or copy key.
                </Text>
                <span className="spanPosition  ">
                  <input type="text" className="inputCopy" value={value} />
                  <button onClick={handleCopyClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2.5 2.5V0.5C2.5 0.367392 2.55268 0.240215 2.64645 0.146447C2.74022 0.0526784 2.86739 0 3 0H9.5C9.63261 0 9.75979 0.0526784 9.85355 0.146447C9.94732 0.240215 10 0.367392 10 0.5V7C10 7.13261 9.94732 7.25979 9.85355 7.35355C9.75979 7.44732 9.63261 7.5 9.5 7.5H7.5V9.4965C7.5 9.7745 7.2755 10 6.9965 10H0.5035C0.437361 10.0001 0.371858 9.98709 0.310741 9.96181C0.249624 9.93653 0.194093 9.89944 0.147325 9.85267C0.100558 9.80591 0.0634728 9.75038 0.0381929 9.68926C0.0129129 9.62814 -6.55285e-05 9.56264 2.4878e-07 9.4965L0.00150026 3.0035C0.00150026 2.7255 0.226 2.5 0.505 2.5H2.5ZM3.5 2.5H6.9965C7.2745 2.5 7.5 2.7245 7.5 3.0035V6.5H9V1H3.5V2.5Z"
                        fill="#FCFCFC"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </button>
                </span>
                {loading ? (
                  <Button className="btnBlue" onClick={loadingBtn} disabled>
                    <Spinner animation="border" size="sm" variant="light" />
                  </Button>
                ) : (
                  <Button className="btnBlue" onClick={loadingBtn}>
                    Deposit with Pix
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

export default Wstethbuy;
