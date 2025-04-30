import HeroSection from "../components/hero/HeroSection";
import ProjectSection from "../components/projects/ProjectSection";
import SkillSection from "../components/Skills/SkillSection";
import ScrollAnimation from "../components/loading/ScrollAnimation";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ScrollAnimation>
        <h1 className="text-2xl font-bold my-6 md:my-12 text-primary text-center md:text-3xl lg:text-5xl font-gummy">
          My Skills
        </h1>
      </ScrollAnimation>
      <ScrollAnimation>
        <SkillSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <h1 className="text-2xl font-bold my-6 md:my-12 text-primary text-center md:text-3xl lg:text-5xl font-gummy">
          My Projects
        </h1>
      </ScrollAnimation>
      <ProjectSection />
    </div>
  );
}

export default HomePage;
