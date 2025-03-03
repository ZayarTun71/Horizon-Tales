import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import styles from "@/scss/Sidebar.module.scss";
import { MenuItem } from "@/interfaces/Interface";

const Sidebar = ({ menuItems }: { menuItems: MenuItem[] }) => {

    const [isOpen, setIsOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.collapsed}`}>
            {/* <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleButton}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}
            <ul className={styles.navList}>
                {menuItems.map((item: MenuItem, index: any) => (
                    <li key={index} className={styles.navItem}>
                        <Link href={item.href} className={styles.navLink}>
                            {isOpen && <span>{item.label}</span>}
                            {item.children && isOpen && (
                                <button
                                    className={styles.dropdownToggle}
                                    onClick={(e) => {
                                        e.preventDefault();
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
                                        <Link href={child.href} className={styles.subMenuLink}>
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
