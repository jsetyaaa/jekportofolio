import { useState } from "react";
import ScrollAnimation from "../loading/ScrollAnimation";

const CardBox = ({ thumbnail, title, description, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollAnimation>
      <div
        className="bg-primary p-4 rounded-lg mx-6 flex flex-col hover:scale-105 transition-all duration-300 ease-in-out cursor-grab"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={thumbnail} alt={title} className="object-cover rounded-lg" />
        <h1 className="text-xl mt-4 font-bold text-center text-second">{title}</h1>
        <p className="text-sm mt-4 md:text-base text-second">
          {isHovered
            ? description
            : description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-end"
        >
          <button className="px-6 py-4 mt-4 bg-second hover:bg-third text-primary rounded-lg cursor-pointer font-bold">
            See More
          </button>
        </a>
      </div>
    </ScrollAnimation>
  );
};

export default CardBox;
