import Link from "next/link";
import Image from "next/image";
import styles from "./gallery.module.css";
export default function gallery() {
  return (
    <section>
      <div className={styles.gallery}>
        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>

        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.gallery__card}>
          <Image
            src="https://picsum.photos/id/1018/400/"
            alt="Description of the image"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
