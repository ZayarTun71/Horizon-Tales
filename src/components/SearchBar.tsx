"use client";
import React from "react";
import { Search } from "lucide-react";
import styles from "@/scss/SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.m_search}>
      <input type="text" className="form-control" placeholder="Search" />
      <Search className={styles.search_icon} />
    </div>
  );
};

export default SearchBar;
