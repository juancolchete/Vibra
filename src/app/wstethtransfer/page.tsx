/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./wstethtransfer.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";

import { IoArrowUndoOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const Wstethtransfer = () => {
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
                  width="95"
                  height="91"
                  viewBox="0 0 95 91"
                  fill="none"
                >
                  <path
                    d="M80.9946 59.6166C83.9412 52.6029 84.6195 44.8404 82.9341 37.4205C81.2486 30.0006 77.2842 23.2965 71.5982 18.2506C65.9122 13.2047 58.7906 10.0709 51.2345 9.28981C43.6785 8.50867 36.068 10.1195 29.4732 13.8957L24.9682 5.99353C31.8603 2.0475 39.6648 -0.0190263 47.6031 0.000132006C55.5414 0.0192903 63.3359 2.12347 70.2089 6.10272C90.5995 17.8946 98.4105 43.1434 88.9055 64.1978L95 67.719L76.0854 77.7912L75.3361 56.3456L80.9946 59.6166V59.6166ZM14.01 31.3834C11.0633 38.3971 10.385 46.1596 12.0705 53.5795C13.7559 60.9994 17.7203 67.7035 23.4063 72.7494C29.0923 77.7953 36.214 80.9291 43.77 81.7102C51.3261 82.4913 58.9365 80.8805 65.5313 77.1043L70.0363 85.0065C63.1443 88.9525 55.3397 91.019 47.4014 90.9999C39.4632 90.9807 31.6686 88.8765 24.7956 84.8973C4.40509 73.1054 -3.40599 47.8566 6.099 26.8022L0 23.2856L18.9146 13.2133L19.6639 34.6589L14.0055 31.3879L14.01 31.3834ZM31.6076 54.5987H56.5849C57.1871 54.5987 57.7647 54.359 58.1905 53.9324C58.6164 53.5059 58.8556 52.9273 58.8556 52.324C58.8556 51.7207 58.6164 51.1422 58.1905 50.7156C57.7647 50.289 57.1871 50.0493 56.5849 50.0493H38.4196C35.4085 50.0493 32.5208 48.8511 30.3916 46.7182C28.2625 44.5852 27.0663 41.6924 27.0663 38.676C27.0663 35.6596 28.2625 32.7667 30.3916 30.6338C32.5208 28.5009 35.4085 27.3026 38.4196 27.3026H42.9609V22.7533H52.0436V27.3026H63.3969V36.4013H38.4196C37.8174 36.4013 37.2399 36.641 36.814 37.0676C36.3882 37.4941 36.149 38.0727 36.149 38.676C36.149 39.2793 36.3882 39.8578 36.814 40.2844C37.2399 40.711 37.8174 40.9507 38.4196 40.9507H56.5849C59.596 40.9507 62.4838 42.1489 64.6129 44.2818C66.7421 46.4148 67.9382 49.3076 67.9382 52.324C67.9382 55.3404 66.7421 58.2333 64.6129 60.3662C62.4838 62.4991 59.596 63.6974 56.5849 63.6974H52.0436V68.2467H42.9609V63.6974H31.6076V54.5987Z"
                    fill="#423FFF"
                  />
                </svg>
                <Text size="0.675rem" color="##fcfcfc66" center>
                  You are sending
                </Text>
                <Title size="0.875rem">3,45 DREX</Title>

                <Text size="0.675rem" color="##fcfcfc66" center>
                  to this wallet
                </Text>
                <span className="spanPosition  ">
                  <input
                    type="text"
                    className="inputCopy"
                    disabled
                    value={value}
                  />
                  {/* <button onClick={handleCopyClick}>
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
                  </button> */}
                </span>
                {loading ? (
                  <Button className="btnBlue" onClick={loadingBtn} disabled>
                    <Spinner animation="border" size="sm" variant="light" />
                  </Button>
                ) : (
                  <Link href="wstethswap">
                    <Button className="btnBlue" onClick={loadingBtn}>
                      Confirm Transaction
                    </Button>
                  </Link>
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

export default Wstethtransfer;
