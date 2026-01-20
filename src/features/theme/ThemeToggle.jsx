import { useTheme } from '../../shared/hooks/ThemeHook';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
    >
      <div className={`${styles.toggleTrack} ${isDark ? styles.dark : ''}`}>
        <div className={styles.toggleThumb}>
          {theme === 'light' ? '☀️' : '🌙'}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;