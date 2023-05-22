import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
    </>
  );
}
