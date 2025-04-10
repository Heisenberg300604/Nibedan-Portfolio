import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import ContactCTA from "@/components/home/contact";
import HackathonsPreview from "@/components/home/HackathonsPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import SkillsPreview from "@/components/home/SkillsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsPreview/>
      <ProjectsPreview/>
      <ExperiencePreview/>
      <HackathonsPreview/>
      <ContactCTA/>
    </>
  );
}
