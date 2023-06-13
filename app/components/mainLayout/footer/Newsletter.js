"use client";
import styles from "./newsletter.module.css";
import ButtonWht from "../../../ui/ButtonWht";
import { useState } from "react";
export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}, Email: ${email}`);
  };
  return (
    <div className={styles.container}>
      <h4>Stay Connected</h4>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <ButtonWht type="submit">Submit</ButtonWht>
      </form>
      <small>We respect your privacy.</small>
    </div>
  );
}
