import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import ProfessionalContactForm from "@/components/home/contact";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <ProfessionalContactForm />
    </>
  );
}
