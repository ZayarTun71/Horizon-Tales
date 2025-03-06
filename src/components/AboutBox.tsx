"use client";
import { AboutBoxProps } from "@/interfaces/Interface";
import styles from "@/scss/AboutBox.module.scss";

const AboutBox = ({title, text}:AboutBoxProps) => {
    return (
        <div className={styles.about_box} >
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
};

export default AboutBox;
