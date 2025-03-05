"use client";

import styles from "@/scss/Card.module.scss";
import { Ellipsis } from "lucide-react";

interface CardProps {
    imageSrc: string;
    imageSrcSet: string;
    altText: string;
    title: string;
    link: string;
    categories: { name: string; link: string }[];
    date: string;
    description: string;
}

const isVideo = (src: string) => {
    return /\.(mp4|webm|ogg)$/i.test(src);
};

const Card: React.FC<CardProps> = ({
    imageSrc,
    imageSrcSet,
    altText,
    title,
    link,
    categories,
    date,
    description,
}) => {
    return (
        <article className={styles.s_card}>
            <div className={styles.entry_image}>
                <a href={link} className={styles.entry_image_link}>
                    <div className={styles.image_wrapper}>
                        {isVideo(imageSrc) ? (
                            <video src={imageSrc} poster={imageSrcSet} autoPlay loop muted playsInline />
                        ) : (
                            <img src={imageSrc} srcSet={imageSrcSet} alt={altText} />
                        )}
                        <div className={styles.overlay}>
                            <span className={styles.overlay_text}><Ellipsis /></span>
                        </div>
                    </div>
                </a>
            </div>

            <div className={styles.entry_text}>
                <div className={styles.entry_header}>
                    <h2 className={styles.entry_title}>
                        <a href={link}>{title}</a>
                    </h2>
                    <div className={styles.entry_meta}>
                        <span className={styles.entry_meta_cat}>
                            {categories.map((category, index) => (
                                <a key={index} href={category.link}>
                                    {category.name}
                                    {index !== categories.length - 1 && ", "}
                                </a>
                            ))}
                        </span>
                        <span className={styles.entry_meta_date}>
                            <a href={link}>{date}</a>
                        </span>
                    </div>
                </div>
                <div className={styles.entry_description}>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
};

export default Card;
