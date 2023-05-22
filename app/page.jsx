import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
