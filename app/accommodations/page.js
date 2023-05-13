import Link from "next/link";
import styles from "./accommodations.module.css";

export default function Accommodations() {
  return (
    <>
      <section>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://picsum.photos/id/1018/400/300" />
          </div>

          <div className={styles.content}>
            <h3>Bunk House</h3>
            <p>Description of bunk house</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://picsum.photos/id/1018/400/300" />
          </div>

          <div className={styles.content}>
            <h3>Bunk House</h3>
            <p>Description of bunk house</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://picsum.photos/id/1018/400/300" />
          </div>

          <div className={styles.content}>
            <h3>Bunk House</h3>
            <p>Description of bunk house</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="https://picsum.photos/id/1018/400/300" />
          </div>

          <div className={styles.content}>
            <h3>Bunk House</h3>
            <p>Description of bunk house</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
