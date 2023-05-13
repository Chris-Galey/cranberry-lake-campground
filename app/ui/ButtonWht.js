import styles from "./buttons.module.css";

export default function ButtonWht({ children }) {
  return (
    <button className={`${styles.button} ${styles.white}`}>{children}</button>
  );
}
