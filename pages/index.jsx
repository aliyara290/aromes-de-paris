import Header from "@/components/home/Header";
import HomeHero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Menu from "@/components/home/Menu";
import Team from "@/components/home/Team";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Header />
        <HomeHero />
      <main>
        <Intro />
        <Menu />
        <Team />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
