import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navimg}>
        <AiFillThunderbolt className={styles.logo} />
        <h3>Sanjeevani</h3>
      </div>
      <div className={styles.navinfo}>
        <Link href="/">About us</Link>
        <Link href="/">Contact us</Link>
        <Link href="/">Contribute</Link>
        <FaFacebookSquare className={styles.icon} />
        <GrInstagram className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <button className={styles.donate}>Donate</button>
      </div>
    </div>
  );
}

export default Navbar;
