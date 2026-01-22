import Container from "../../ui/Container";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>A/S</h1>
          </div>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
