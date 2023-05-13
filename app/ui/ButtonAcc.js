import styles from "./buttons.module.css";

export default function ButtonAcc({ children }) {
  return (
    <button className={`${styles.button} ${styles.acc}`}>{children}</button>
  );
}
