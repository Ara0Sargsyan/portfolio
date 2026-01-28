import styles from './Footer.module.css';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.logo}>Ara Sargsyan</h3>
          <p>Building scalable web applications with an engineering mindset.</p>
        </div>
        
        <div className={styles.socials}>
          <a href="https://github.com/Ara0Sargsyan" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ara-sargsyan-888118229/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {currentYear} Created by Ara Sargsyan. Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default Footer