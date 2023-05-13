import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.image}>
      <img
        className={styles.img}
        src="https://lh3.googleusercontent.com/QD6Ig4aeZvLBNDbTkjAiUXS2bcGVnr1Hu6PrR1OSPI18qg0NelVoIbSlx-pCrmAH3qoHFSMuXLt3vYaBPEmQrnKe-OM6G73jyeFPaEHnBGMMH7QmhdiP=s1600"
        alt="Campground"
      />
    </div>
  );
}
