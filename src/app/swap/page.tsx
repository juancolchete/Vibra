/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./swap.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";

import { IoArrowUndoOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Form, Spinner } from "react-bootstrap";
import ModalConfirm from "@/components/modals/ModalConfirm";

const Swap = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  function ModalConfirmX() {
    setModal(!modal);
  }

  function loadingBtn() {
    setLoading(true);
    ModalConfirmX();
    setTimeout(() => {
      setLoading(false);
      ModalConfirmX();
    }, 2000);
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6 col-lg-6 offset-md-3   ">
            <div className={styles.content}>
              <Header />
              {/* SECTION */}
              <section>
                <Link href="/dashboard">
                  <button>
                    <IoArrowUndoOutline />
                  </button>
                </Link>
                <Text size="1.125rem" color="#fff">
                  Swap
                </Text>
              </section>
              {/* CARD */}
              <div className={styles.cards}>
                <Text size="0.875rem" color="#fff" center>
                  Select crypto
                </Text>
                <Form.Select aria-label="Default select example">
                  <option>Select crypto</option>
                  <option value="1">
                    DREX <span>3,45</span>
                  </option>
                  <option value="2">BNX</option>
                  <option value="3">BITCOIN</option>
                </Form.Select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M17 34C7.6109 34 0 26.3891 0 17C0 7.6109 7.6109 0 17 0C26.3891 0 34 7.6109 34 17C34 26.3891 26.3891 34 17 34ZM17 11.9H10.2V15.3H25.5L17 6.8V11.9ZM8.5 18.7L17 27.2V22.1H23.8V18.7H8.5Z"
                    fill="#FCFCFC"
                  />
                </svg>
                <Form.Select aria-label="Default select example">
                  <option value="1">ICP</option>
                  <option value="2">BNX</option>
                  <option value="3">BITCOIN</option>
                </Form.Select>
                {loading ? (
                  <>
                    <Button className="btnBlue" onClick={loadingBtn} disabled>
                      <Spinner animation="border" size="sm" variant="light" />
                    </Button>
                    <ModalConfirm />
                  </>
                ) : (
                  <Button className="btnBlue" onClick={loadingBtn}>
                    Swap crypto
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

export default Swap;
