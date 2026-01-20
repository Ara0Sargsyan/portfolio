import styles from './Container.module.css';

const Container = ({ children, className = '', size = 'default' }) => {
  const sizeClass = styles[size] || '';
  
  return (
    <div className={`${styles.container} ${sizeClass} ${className}`}>
      {children}
    </div>
  );
};

export default Container;