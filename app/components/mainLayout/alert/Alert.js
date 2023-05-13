import styles from "./alert.module.css";
export default function Alert() {
  return (
    <div className={styles.alert}>
      <small>
        New docks will be installed on 7/1/2023. The beach will be closed the
        entire day.
      </small>
    </div>
  );
}
