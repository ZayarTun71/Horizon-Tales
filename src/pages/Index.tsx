"use client"

import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import { menuItems } from "@/data/MenuItems";
import Content from "@/pages/Content";
import { useEffect, useState } from "react";
import styles from "@/scss/Index.module.scss";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const page = searchParams?.get("page");
    if (page) setActivePage(page);
  }, [searchParams]);

  const handlePageChange = (href: string) => {
    setActivePage(href);
    router.push(`/?page=${href}`, { scroll: false });
  };

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Content />;
      case "myanmar":
        return "hello";
      default:
        return <Content />;
    }
  };

  return (
    <Wrapper>
      <>
        <div className={styles.layout}>
          <Sidebar menuItems={menuItems} onPageChange={handlePageChange} />
          <div className={styles.s_page}>{renderContent()}</div>
        </div>
      </>
    </Wrapper>
  );
}
