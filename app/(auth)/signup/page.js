"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { first, last, email, username, password };
    console.log(data);
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Sign up successful");
          // Add your redirect logic here
        } else {
          console.log("Sign up failed");
          // Add your error handling logic here
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Add your error handling logic here
      });
  };
  return (
    <section>
      <Link href="/">Home</Link>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={first}
            onChange={(event) => setFirst(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={last}
            onChange={(event) => setLast(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </section>
  );
}
