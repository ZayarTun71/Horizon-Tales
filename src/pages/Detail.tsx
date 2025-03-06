"use client";

import { useEffect, useState } from "react";
import styles from "@/scss/Detail.module.scss";
import { useSearchParams } from "next/navigation";
import Preloader from "@/components/Preloader";
import { CardData } from "@/data/ContentData";

const Detail = () => {

    const searchParams = useSearchParams();
    const id = searchParams?.get("page")?.split("/")[1];

    const [cardData, setCardData] = useState<any | null>(null);

    useEffect(() => {
        if (id) {
            const foundCard = CardData.find((card: any) => card.id === Number(id));
            setCardData(foundCard || null);
        }
    }, [id]);

    if (!cardData) {
        return <Preloader />;
    }
    const isVideo = (src: string) => {
        return /\.(mp4|webm|ogg)$/i.test(src);
    };


    return (
        <div className={styles.s_detail}>
            {isVideo(cardData.imageSrc) ? (
                <video src={cardData.imageSrc} poster={cardData.imageSrcSet} autoPlay loop muted playsInline />
            ) : (
                <img src={cardData.imageSrc} srcSet={cardData.imageSrcSet} alt={cardData.altText} />
            )}
            <h1>{cardData.title}</h1>
            <p>{cardData.description}</p>
            <p>{cardData.date}</p>
        </div>
    );
};

export default Detail;
