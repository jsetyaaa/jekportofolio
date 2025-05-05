import CardBox from "./CardBox";
import projectData from "../../data/projectData";
import ScrollAnimation from "../loading/ScrollAnimation";

const ProjectSection = () => {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
    <div className="flex flex-col items-center justify-center md:justify-start gap-6 md:mx-6 mt-6 md:mt-12 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-4 text-second font-gummy">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-6">
        {projectData.map((project, index) => (
          <CardBox
            key={index}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            url={project.url}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
    </ScrollAnimation>
  );
};

export default ProjectSection;
