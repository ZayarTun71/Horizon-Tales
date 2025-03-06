"use client"

import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import { menuItems } from "@/data/MenuItems";
import Content from "@/pages/Content";
import { useEffect, useState } from "react";
import styles from "@/scss/Index.module.scss";
import { useSearchParams, useRouter } from "next/navigation";
import About from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";
import Detail from "@/pages/Detail";

export default function Home() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const page = searchParams?.get("page");
    setActivePage(page || "home");
  }, [searchParams]);

  const handlePageChange = (href: string) => {
    setActivePage(href);
    router.push(`/?page=${href}`, { scroll: false });
  };

  const renderContent = () => {
    if (activePage === "home") return <Content />;
    if (activePage === "about") return <About />;
    if (activePage.startsWith("detail/")) return <Detail />;
    return <ErrorPage text={"Coming Soon!"}/>;
  };

  return (
    <Wrapper>
      <div className={styles.layout}>
        <Sidebar menuItems={menuItems} onPageChange={handlePageChange} activePage={activePage}/>
        <div className={styles.s_page}>{renderContent()}</div>
      </div>
    </Wrapper>
  );

}
