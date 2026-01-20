import styles from './Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className = ''
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;