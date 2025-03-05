export interface MenuItem {
    label: string;
    href: string;
    children?: MenuItem[];
}

export interface SidebarProps {
    menuItems: MenuItem[];
    onPageChange: (href: string | any) => void;
  }