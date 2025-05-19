import { useParams, useNavigate } from "react-router-dom";
import projectData from "../data/projectData";
import { FaBackspace } from "react-icons/fa";

const DetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="p-6 text-center text-second text-5xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen px-6 py-8 md:px-12 md:mx-12 md:rounded-xl md:mt-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-second text-primary rounded hover:scale-105 transition cursor-pointer flex items-center gap-2"
      >
        <FaBackspace />
        Kembali
      </button>
      <img
        src={project.thumbnail}
        alt={project.title}
        className="rounded-lg md:rounded-3xl mb-6"
      />
      <div className="flex flex-col gap-4 mt-6">
        <div className="mb-4 text-second flex flex-col gap-6">
          <span className="font-bold text-3xl">🌐 {project.title}</span>
          <span className="text-base md:text-lg text-justify ml-12">
            {project.description}
          </span>
        </div>
        <div className="mb-4 text-second flex flex-col gap-6">
          <span className="font-bold text-3xl">🚀 Fitur Utama</span>
          <ul className="list-disc list-inside text-base md:text-lg space-y-1">
            {project.fitur.map((item, index) => (
              <li key={index} className="ml-12">
                {item.name} - {item.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 text-second flex flex-col gap-6">
          <span className="font-bold text-3xl">🐼 Anggota Team</span>
          <ul className="list-disc list-inside text-base md:text-lg space-y-1">
            {project.teams.map((member, index) => (
              <li key={index} className="ml-12">
                {member.name} as {member.role}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 text-second flex flex-col gap-6">
          <span className="font-bold text-3xl">
            🛠️ Teknologi
          </span>
          <ul className="list-disc list-inside text-base md:text-lg space-y-1">
            {project.tech.map((tech, index) => (
              <li key={index} className="ml-12">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
