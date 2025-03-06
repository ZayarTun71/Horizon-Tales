"use client";

import { ErrorPageProps } from "@/interfaces/Interface";
import styles from "@/scss/ErrorPage.module.scss";

const ErrorPage = ({ text }: ErrorPageProps) => {
    return (
        <div className={styles.s_error_page}>
            <p>{text}</p>
        </div>
    );
};

export default ErrorPage;
