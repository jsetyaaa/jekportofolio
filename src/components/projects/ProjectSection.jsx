import CardBox from "./CardBox";
import projectData from "../../data/projectData";

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:mx-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
  );
};

export default ProjectSection;