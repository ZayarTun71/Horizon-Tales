"use client";

import Card from "@/components/Card";
import { ContentData } from "@/data/ContentData";
import styles from "@/scss/Content.module.scss";

const Content = () => {
  return (
    <div className={`${styles.s_content}`}>
      <div className={`${styles.content_inner}`}>
        {ContentData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
