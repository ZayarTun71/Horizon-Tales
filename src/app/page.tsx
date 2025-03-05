"use client"

import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import { menuItems } from "@/data/MenuItems";
import Content from "@/pages/Content";
import { Suspense, useEffect, useState } from "react";
import styles from "@/scss/Index.module.scss";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Preloader from "@/components/Preloader";

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
    router.replace(`/?page=${href}`, { scroll: false });
  };

  const renderContent = () => {
    // Check if the activePage is "home" or "/home"
    if (activePage === "home") {
      return <Content />;
    }

    // Check for other cases, like "/myanmar"
    if (activePage === "myanmar") {
      return <div>Hello</div>;  // You can replace this with actual content for Myanmar
    }

    // Default fallback (if activePage doesn't match any of the cases)
    return <Content />;
  };

  return (
    <Wrapper>
      <div className={styles.layout}>
        <Sidebar menuItems={menuItems} onPageChange={handlePageChange} />
        <div className={styles.s_page}>{renderContent()}</div>
      </div>
    </Wrapper>
  );

}
