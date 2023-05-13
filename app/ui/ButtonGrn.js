import styles from "./buttons.module.css";

export default function ButtonGrn({ children }) {
  return (
    <button className={`${styles.button} ${styles.green}`}>{children}</button>
  );
}
