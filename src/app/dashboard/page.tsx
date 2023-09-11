"use client"
import React from "react";
import styles from "./dashboard.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Page = () => {
  const balance = useSelector(
    (state: RootState) => state.user.balance
  );
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6 col-lg-6 offset-md-3   ">
            {/* {wallet.address} */}
            <div className={styles.content}>
              <Header />
              {/* TITLE */}
              <Title size="1.5rem">Dashboard</Title>
              {/* CARD1 */}
              <Link href="drex">
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  DREX
                </Text>
                <div className={styles.cardsInt}>
                  {/* <Text size="0.625rem" color="##fcfcfc66"> */}
                  {/*   R$ 25.547.51 */}
                  {/* </Text> */}
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      {balance.drex} 
                    </Text>
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                  </div>
                </div>
              </div>
              </Link>
              {/* CARD2 */}
              <Link href="steth">
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  stETH
                </Text>
                <div className={styles.cardsInt}>
                  {/* <Text size="0.625rem" color="##fcfcfc66"> */}
                  {/*   R$ 25.547.51 */}
                  {/* </Text> */}
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      {balance.stEth} 
                    </Text>
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                  </div>
                </div>
              </div>
              </Link>
              {/* CARD3 */}
              <Link href="wDrex">
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  wDrex
                </Text>
                <div className={styles.cardsInt}>
                  {/* <Text size="0.625rem" color="##fcfcfc66"> */}
                  {/*   R$ 25.547.51 */}
                  {/* </Text> */}
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      {balance.wDrex} 
                    </Text>
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                  </div>
                </div>
              </div>
              </Link>
              {/* CARD4 */}
              <Link href="icp">
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  BFT
                </Text>
                <div className={styles.cardsInt}>
                  {/* <Text size="0.625rem" color="##fcfcfc66"> */}
                  {/*   R$ 25.547.51 */}
                  {/* </Text> */}
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      {balance.BFT}
                    </Text>
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                  </div>
                </div>
              </div>
              </Link>

              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
