import styles from "./sites.module.css";
import ButtonGrn from "../../ui/ButtonGrn";

export default function Sites() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Accomodations</h2>
        <div className={styles.container}>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src="https://www.sprucelake.org/wp-content/uploads/2018/03/bg-groups-retreats.jpg"
              alt="A beautiful sunset"
            />
            <h4>RV</h4>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src="https://www.sprucelake.org/wp-content/uploads/2018/03/bg-groups-retreats.jpg"
              alt="A beautiful sunset"
            />
            <h4>Rustic Tents</h4>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src="https://www.sprucelake.org/wp-content/uploads/2018/03/bg-groups-retreats.jpg"
              alt="A beautiful sunset"
            />
            <h4>Cabin</h4>
          </figure>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src="https://www.sprucelake.org/wp-content/uploads/2018/03/bg-groups-retreats.jpg"
              alt="A beautiful sunset"
            />
            <h4>Bunkhouse</h4>
          </figure>
        </div>

        <div>
          <ButtonGrn>
            <a href="#">Learn more</a>
          </ButtonGrn>
        </div>
      </div>
    </section>
  );
}
