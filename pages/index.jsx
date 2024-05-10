import HomeHero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Menu from "@/components/home/Menu";
import Team from "@/components/home/Team";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <Menu />
      <Gallery />
      <Team />
    </>
  );
}
