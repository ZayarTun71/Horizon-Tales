export interface MenuItem {
    label: string;
    href: string;
    children?: MenuItem[];
}

export interface SidebarProps {
    menuItems: MenuItem[];
    onPageChange: (href: string | any) => void;
    activePage: string;
}

export interface CardProps {
    imageSrc: string;
    imageSrcSet: string;
    altText: string;
    title: string;
    link: string;
    categories: { name: string; link: string }[];
    date: string;
    description: string;
}