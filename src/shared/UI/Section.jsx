import styles from './Section.module.css';

const Section = ({ 
  children, 
  className = '', 
  variant = 'default',
  background = 'none'
}) => {
  return (
    <section className={`${styles.section} ${styles[variant]} ${styles[background]} ${className}`}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Section;