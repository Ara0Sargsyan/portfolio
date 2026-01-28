import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link className={styles.logo} to="/">
            {"</AS>"}
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
