"use client"

import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import Content from "@/pages/Content";

export default function Home() {

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Catagory", href: "/",
      children: [
        { label: "Myanmar", href: "/myanmar" },
        { label: "Japan", href: "/japan" },
      ]
    },
  ];


  return (
    <Wrapper>
      <>
        <Sidebar menuItems={menuItems} />
        <Content/>
      </>
    </Wrapper>
  );
}
