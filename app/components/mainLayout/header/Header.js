"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import styles from "./header.module.css";
export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const header = showHeader
    ? `${styles.header}`
    : `${styles.header} ${styles.hidden}`;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > 200 && prevScrollPos < currentScrollPos) {
        setShowHeader(false);
      } else if (prevScrollPos > currentScrollPos) {
        setShowHeader(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, showHeader]);

  return (
    <header className={header}>
      <div className={styles.logo}>
        <img
          src="https://www.sprucelake.org/wp-content/themes/yboot/assets/img/logos/logo-footer.png"
          alt="campground logo"
        />
      </div>
      <Nav />
    </header>
  );
}
