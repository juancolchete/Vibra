/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./drextransfer.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";

import { IoArrowUndoOutline } from "react-icons/io5";
import { Form } from "react-bootstrap";

const DrexTransfer = () => {
  return (
    <>
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
                <Text size="0.875rem" color="#fff" center>
                  Insert wallet
                </Text>
                <input
                  type="number"
                  placeholder="0x4a4s4dasfasfjhaosjhdoasjdas"
                />
                <Text size="0.875rem" color="#fff" center>
                  Select crypto
                </Text>
                <Form.Select aria-label="Default select example">
                  <option>Select crypto</option>
                  <option value="1">DREX</option>
                  <option value="2">BNX</option>
                  <option value="3">BITCOIN</option>
                </Form.Select>
                <Text size="0.875rem" color="##fcfcfc66" center>
                  Amount: 3,00 DREX
                </Text>
                <Text size="0.875rem" color="#fff" center>
                  Insert Value
                </Text>
                <input type="number" placeholder="0,00" />
                <Link href="wstethtransfer">
                  <Button className="btnBlue">Transfer crypto</Button>
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

export default DrexTransfer;
