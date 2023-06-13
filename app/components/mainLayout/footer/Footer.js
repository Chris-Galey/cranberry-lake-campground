import Link from "next/link";
import styles from "./footer.module.css";
import Newsletter from "./Newsletter";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Newsletter />
      <div className={styles.footer__nav}>
        <div className={styles.footer__links}>
          <h5>Explore</h5>
          <ul className={styles.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__links}>
          <h5>Accomodations</h5>
          <ul className={styles.list}>
            <li>
              <Link href="/accomodations">Accomodations</Link>
            </li>

            <li>
              <Link href="/#Reservations">Reservations</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer__links}>
          <h5>Connect</h5>
          <ul className={styles.list}>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div className={styles.footer__links}>
          <ul className={styles.list}>
            <li>888.888.8888</li>
            <li> 123 Main St, Anytown, USA</li>
          </ul>
          <div className={styles.map}>Mini Map</div>
        </div>
      </div>
    </footer>
  );
}
