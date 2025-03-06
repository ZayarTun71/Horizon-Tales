"use client";
import styles from "@/scss/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.copyright} >
            <span>© Copyright Horizon-Tales 2025</span>
            <span className={styles.separator}>|</span>
            <span>
                Design by 
                <Link href="https://www.zayartun.com/" className={styles.me} target="_blank" rel="noopener noreferrer">
                    Ryan Zay
                </Link>
            </span>
        </div>
    );
};

export default Footer;
