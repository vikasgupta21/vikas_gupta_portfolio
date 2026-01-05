import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import FeatureCards from "@/sections/FeatureCards";
import Hero from "@/sections/Hero";
import LogoShowcase from "@/sections/LogoShowcase";
import AppShowcase from "@/sections/ShowcaseSection";
import TechStack from "@/sections/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Hero />
  <AppShowcase />
  <NavBar />
  <LogoShowcase />
  <FeatureCards />
  <Experience />
  <TechStack />
  <Contact />

  </>
  );
}
