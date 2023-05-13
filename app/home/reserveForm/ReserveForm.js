import styles from "./reserveForm.module.css";
export default function ReserveForm() {
  return (
    <form className={styles.form}>
      <div>
        <label>Type</label>
        <select>
          <option value="bunkhouse">Bunkhouse</option>
          <option value="cabin">Cabin</option>
          <option value="rustic">Rustic</option>
        </select>
      </div>
      <div>
        <label>Start</label>
        <input className={styles.book_from} type="date" name="book_from" />
      </div>

      <label>
        End
        <input className={styles.book_to} type="date" name="book_to" />
      </label>

      <div className={styles.adults}>
        <label>Adults</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div className={styles.children}>
        <label>Children</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </form>
  );
}
