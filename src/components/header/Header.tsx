import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const logoG = "./logoG.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="dashboard">
        <img src={logoG} alt="Logo" />
      </Link>
      <div className={styles.bol}></div>
    </div>
  );
};

export default Header;
