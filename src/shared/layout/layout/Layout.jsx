import Header from '../header/Header'
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
};

export default Layout;