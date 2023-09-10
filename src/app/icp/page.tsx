/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./icp.module.css";
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

const qr = "./qrCode.png";
const money = "./money.png";
const moneyArrow = "./moneyArrow.png";

const Wsteth = () => {
  const [value, setValue] = useState("0x6791504a6d9219ca528b333A71b427B4044Fb18a");
  const [copied, setCopied] = useState(false);
  // const notify = () => toast("Copied !");
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
                <Link href="dashboard">
                  <button>
                    <IoArrowUndoOutline />
                  </button>
                </Link>
                <Text size="1.125rem" color="#fff">
                  ICP
                </Text>
              </section>
              {/* CARD */}
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  ICP
                </Text>
                <div className={styles.cardsInt}>
                  <Text size="0.625rem" color="##fcfcfc66">
                    R$ 25.547.51
                  </Text>
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      25.547,51
                    </Text>
                  </div>
                </div>
                <div className={styles.cardsInt}>
                  <Text size="0.625rem" color="##fcfcfc66">
                    Wallet number
                  </Text>
                  <div className={styles.arrow}>
                    <span className="spanPosition  ">
                      <input
                        style={{
                          background: "transparent",
                          border: "none",
                          padding: "1px  0",
                        }}
                        type="text"
                        className="inputCopy"
                        value={value}
                      />
                      <button style={{ top: "-36%" }} onClick={handleCopyClick}>
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
                  </div>
                </div>
              </div>
              {/* DEPOSIT */}
              {/* <div className={styles.blocks}>
                <div className="d-flex align-items-center gap-5">
                  <img src={money} alt="qr" />
                  <Text size="0.625rem" color="#fff">
                    Deposit crypto
                  </Text>
                  <Link href="icpdeposit" className="ms-auto">
                    <button>
                      <BsFillArrowRightCircleFill />
                    </button>
                  </Link>
                </div>
              </div> */}
              {/* TRANSFER */}
              <div className={styles.blocks}>
                <div className="d-flex align-items-center gap-5">
                  <img src={moneyArrow} alt="qr" />
                  <Text size="0.625rem" color="#fff">
                    Transfer crypto
                  </Text>
                  <Link href="#" className="ms-auto">
                    <button>
                      <BsFillArrowRightCircleFill />
                    </button>
                  </Link>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wsteth;
