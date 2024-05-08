import Image from "next/image";
import Header from "@/components/home/Header";
import HomeHero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <Intro />
      </main>
    </>
  );
}
