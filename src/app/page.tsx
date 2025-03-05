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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const page = searchParams?.get("page");
    setActivePage(page || "home");
  }, [searchParams]);

  const handlePageChange = (href: string) => {
    setActivePage(href);
    router.push(`/?page=${href}`);
  };

  const renderContent = () => {
    
    if (activePage === "home") {
      return <Content />;
    }

    if (activePage === "myanmar") {
      return <div>Hello</div>;
    }

    return <Content />;
  };

  return (
    <Wrapper>
        <div className={styles.layout}>
          <Sidebar menuItems={menuItems} onPageChange={handlePageChange} />
          <Suspense fallback={<Preloader/>}>
            <div className={styles.s_page}>{renderContent()}</div>
          </Suspense>
        </div>
    </Wrapper>
  );
}
