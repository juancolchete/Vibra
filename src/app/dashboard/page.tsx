import React from "react";
import styles from "./dashboard.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const page = () => {
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
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  DREX
                </Text>
                <div className={styles.cardsInt}>
                  <Text size="0.625rem" color="##fcfcfc66">
                    R$ 25.547.51
                  </Text>
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      25.547,51
                    </Text>
                    <Link href="drex">
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* CARD2 */}
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  (w)stETH
                </Text>
                <div className={styles.cardsInt}>
                  <Text size="0.625rem" color="##fcfcfc66">
                    R$ 25.547.51
                  </Text>
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      25.547,51
                    </Text>
                    <Link href="wsteth">
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* CARD3 */}
              <div className={styles.cards}>
                <Text size="1.125rem" color="#fff">
                  LIDO
                </Text>
                <div className={styles.cardsInt}>
                  <Text size="0.625rem" color="##fcfcfc66">
                    R$ 25.547.51
                  </Text>
                  <div className={styles.arrow}>
                    <Text size="1.125rem" color="#fff">
                      547,51
                    </Text>
                    <Link href="lido">
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* CARD4 */}
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
                      47,51
                    </Text>
                    <Link href="icp">
                      <button>
                        <BsFillArrowRightCircleFill />
                      </button>
                    </Link>
                  </div>
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

export default page;
