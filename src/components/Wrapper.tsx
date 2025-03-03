"use client";
import styles from "@/scss/Wrapper.module.scss";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div id="top" className={`${styles.s_wrap} site-wrapper`}>
        {children}
      </div>
    );
  };
  
  export default Wrapper;
  