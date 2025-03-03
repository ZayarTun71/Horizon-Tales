"use client";
import styles from "@/scss/Preloader.module.scss";
import { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={styles.preloader}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;
