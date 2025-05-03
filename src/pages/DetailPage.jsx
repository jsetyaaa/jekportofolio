import { useParams } from "react-router-dom";
import projectData from "../data/projectData";

const DetailPage = () => {
  const { slug } = useParams();
  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    return <div className="p-6 text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="bg-primary px-6 py-8 md:px-12 md:mx-12 md:rounded-xl md:mt-8">
      <img src={project.thumbnail} alt={project.title} className="rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-center mb-4 text-second">{project.title}</h1>
      <p className="text-lg text-center text-second">{project.description}</p>
    </div>
  );
};

export default DetailPage;
