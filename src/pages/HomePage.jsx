import HeroSection from "../components/hero/HeroSection";
import ProjectSection from "../components/projects/ProjectSection";
import SkillSection from "../components/Skills/SkillSection";
import AboutSection from "../components/hero/AboutSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
}

export default HomePage;
