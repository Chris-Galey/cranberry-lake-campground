"use client";
// import {useState, useRef, useEffect} from 'react'
import styles from "./welcome.module.css";
import ButtonGrn from "../../ui/ButtonGrn";
export default function Welcome() {
  //     const {IntersectionObserver} = window
  //     const [intersectionRatio, setIntersectionRatio] = useState(0)
  //     const elementRef = useRef(null)

  //     useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       setIntersectionRatio(entry.intersectionRatio);

  //     });
  //   }, {
  //     threshold: 0.25,
  //   });

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  // console.log(intersectionRatio, elementRef.current)
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4> Welcome to Cranberry Lake</h4>
          <h2> Where your family adventure awaits </h2>
          <p>
            Welcome to Cranberry Lake Campground, nestled on the shores of a
            beautiful small lake. We are delighted to have you here and hope
            that you'll find our peaceful surroundings and natural beauty to be
            the perfect retreat from the hustle and bustle of everyday life.
            Whether you're looking for a relaxing weekend getaway, a family
            vacation, or a chance to enjoy outdoor activities like fishing,
            hiking, or boating, we have everything you need to make your stay
            unforgettable.
          </p>
          <div>
            <ButtonGrn>
              <a href="#">Learn more</a>
            </ButtonGrn>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src="https://lh3.googleusercontent.com/89zYLrf6Q1Tah-ijGZ6SjUIBNnKVhjeKTvvj9ZMeStPSDMSle6K9WIffIyVrYAd8V7p1wrbUz1A8DrCCPU8gWSSWdmS48TcsU0wvO-JDuPF-av09kknzwg=s980"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
