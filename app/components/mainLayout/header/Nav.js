import styles from "./nav.module.css";
import Link from "next/link";
function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/accommodations">Accommodations</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/reserve">Reserve</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      <ul className={styles.nav__login}>
        <li>
          <Link href="/login">Sign In</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/account">O</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
