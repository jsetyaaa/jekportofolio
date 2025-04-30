import CardBox from "./CardBox";
import images from "../../assets/images";

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:mx-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <CardBox
          thumbnail={images["Project1.jpg"]}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          url="projectone"
        />
        <CardBox
          thumbnail={images["Project1.jpg"]}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          url="projectone"
        />
        <CardBox
          thumbnail={images["Project1.jpg"]}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          url="projectone"
        />
        <CardBox
          thumbnail={images["Project1.jpg"]}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          url="projectone"
        />
        <CardBox
          thumbnail={images["Project1.jpg"]}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          url="projectone"
        />
        <CardBox
          thumbnail={images["Project1.jpg"]}
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          url="projectone"
        />
      </div>
    </div>
  );
};

export default ProjectSection;