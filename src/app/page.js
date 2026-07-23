import Image from "next/image";
import Hero from "./components/Hero/Hero";
import { heroData } from "./components/Hero/data";
import Packages from "./components/Packages";
import LifestyleWellnessSection from "./components/WellnessSection";
import Testimonials from "./components/Testimonilas";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero {...heroData}></Hero>
    <Packages></Packages>
    <LifestyleWellnessSection></LifestyleWellnessSection>
    <Testimonials></Testimonials>
    <CTA></CTA>
    <Footer></Footer>
    </>
  );
}
