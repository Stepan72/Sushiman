import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Trending from "@/components/Trending";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Trending />
    </>
  );
}
