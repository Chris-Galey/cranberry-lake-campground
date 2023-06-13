import styles from "./reserveForm.module.css";
import ButtonGrn from "@/app/ui/ButtonGrn";
export default function ReserveForm() {
  return (
    <form className={styles.form}>
      <label className={styles.type}>
        Type
        <select>
          <option value="bunkhouse">Bunkhouse</option>
          <option value="cabin">Cabin</option>
          <option value="rustic">Rustic</option>
        </select>
      </label>

      <label className={styles.type}>
        Start
        <input className={styles.book_from} type="date" name="book_from" />
      </label>

      <label className={styles.type}>
        End
        <input className={styles.book_to} type="date" name="book_to" />
      </label>

      <label className={styles.type}>
        Adults
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>

      <label className={styles.type}>
        Children
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <ButtonGrn>
        <submit className={styles.submit}>Check Availability</submit>
      </ButtonGrn>
    </form>
  );
}
