"use client";

import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { CardData } from "@/data/ContentData";
import styles from "@/scss/Content.module.scss";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Content = () => {
  return (
    <div className={`${styles.s_content}`}>
      <SearchBar/>
      <div className={`${styles.content_inner}`}>
        {CardData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <Card key={index} {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Content;
