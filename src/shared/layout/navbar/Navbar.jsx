import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import ThemeToggle from "../../../features/theme/ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About me" },
    { path: "/contact", label: "Contacts" },
  ];

  return (
    <nav className={styles.navbar}>
      <button
        className={`${styles.burgerMenu} ${!isClosed ? styles.openBurger : ""}`}
        onClick={() => setIsClosed(prev => !prev)}
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      <ul className={`${styles.navList} ${isClosed ? styles.close : ""}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={() => setIsClosed(true)}
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
