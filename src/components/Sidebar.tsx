import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import styles from "@/scss/Sidebar.module.scss";
import { MenuItem, SidebarProps } from "@/interfaces/Interface";
import Link from "next/link";

const Sidebar = ({ menuItems, onPageChange }: SidebarProps) => {

    const [isOpen, setIsOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.collapsed}`}>
            <h1 className={styles.navLogo}>Horizon Tales</h1>
            <ul className={styles.navList}>
                {menuItems.map((item: MenuItem, index: any) => (
                    <li key={index} className={styles.navItem}>
                        <Link href="#" role="button" className={styles.navLink} onClick={() => onPageChange(item.href)}>
                            {isOpen && <span>{item.label}</span>}
                            {item.children && isOpen && (
                                <button
                                    className={styles.dropdownToggle}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenDropdown(openDropdown === index ? null : index);
                                    }}
                                >
                                    {!openDropdown ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                                </button>
                            )}
                        </Link>
                        {item.children && openDropdown === index && (
                            <ul className={styles.subMenu}>
                                {item.children.map((child: MenuItem, childIndex: number) => (
                                    <li key={childIndex} className={styles.subMenuItem}>
                                        <Link href="#" role="button" className={styles.subMenuLink} onClick={() => onPageChange(child.href)} >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
