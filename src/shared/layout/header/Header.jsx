import Container from "../../ui/Container";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <a className={styles.logo} href="/">
            {"</AS>"}
          </a>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
