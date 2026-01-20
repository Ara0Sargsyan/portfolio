import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import ThemeToggle from "../../../features/theme/ThemeToggle";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About me" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contacts" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
