import Image from "next/image";
import Hero from "./home/hero/Hero";
import ReserveForm from "./home/reserveForm/ReserveForm";
import Welcome from "./home/welcome/Welcome";
import Sites from "./home/sites/Sites";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <ReserveForm />
      <Welcome />
      <Sites />
    </main>
  );
}
