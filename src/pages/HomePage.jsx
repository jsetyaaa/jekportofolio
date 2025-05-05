import HeroSection from "../components/hero/HeroSection";
import ProjectSection from "../components/projects/ProjectSection";
import SkillSection from "../components/Skills/SkillSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
}

export default HomePage;
