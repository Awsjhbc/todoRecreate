import rocket from "../../assets/rocket.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocket} />
        <p className={styles.leftLogo}>to</p>
        <p className={styles.rightLogo}>do</p>
        {/* logo p:nth-child(1) .logo img*/}
      </div>
    </header>
  );
};

export default Header;
