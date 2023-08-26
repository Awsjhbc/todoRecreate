/* eslint-disable react/prop-types */
import styles from "./ItemButton.module.css";

const Button = ({ children, onClick, icon, type }) => (
  <button type={type} onClick={onClick} className={styles.button}>
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

export default Button;
