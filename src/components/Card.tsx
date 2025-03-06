"use client";

import { CardProps } from "@/interfaces/Interface";
import styles from "@/scss/Card.module.scss";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const isVideo = (src: string) => {
    return /\.(mp4|webm|ogg)$/i.test(src);
};

const Card: React.FC<CardProps> = ({
    id,
    imageSrc,
    imageSrcSet,
    altText,
    title,
    link,
    categories,
    date,
    description,
}) => {

    const router = useRouter();

    const handleDetailClick = (e: React.MouseEvent, cardID: number) => {
        e.preventDefault();
        router.push(`/?page=detail/${cardID}`, { scroll: false });
    };

    return (
        <article className={styles.s_card}>
            <div className={styles.entry_image}>
                <Link href="" className={styles.entry_image_link} onClick={(e) => handleDetailClick(e, id)}>
                    <div className={styles.image_wrapper}>
                        {isVideo(imageSrc) ? (
                            <video src={imageSrc} poster={imageSrcSet} autoPlay loop muted playsInline onTimeUpdate={(e) => {
                                if (e.currentTarget.currentTime >= 10) {
                                    e.currentTarget.currentTime = 0; // Restart from beginning
                                }
                            }} />
                        ) : (
                            <img src={imageSrc} srcSet={imageSrcSet} alt={altText} />
                        )}
                        <div className={styles.overlay}>
                            <span className={styles.overlay_text}><Ellipsis /></span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={styles.entry_text}>
                <div className={styles.entry_header}>
                    <h2 className={styles.entry_title}>
                        <Link href={link}>{title}</Link>
                    </h2>
                    <div className={styles.entry_meta}>
                        <span className={styles.entry_meta_cat}>
                            {categories.map((category, index) => (
                                <Link key={index} href={category.link}>
                                    {category.name}
                                    {index !== categories.length - 1 && ", "}
                                </Link>
                            ))}
                        </span>
                        <span className={styles.entry_meta_date}>
                            <Link href={link}>{date}</Link>
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
