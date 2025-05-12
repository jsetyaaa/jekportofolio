import { useState } from "react";
import ScrollAnimation from "../loading/ScrollAnimation";
import { Link } from "react-router-dom";

const CardBox = ({ thumbnail, title, description, url, slug }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isExternal = !!url;
  const destination = isExternal ? url : `/projects/${slug}`;

  const cardContent = (
    <>
      <div className="border border-second rounded-lg p-4">
        <picture className="overflow-hidden rounded-lg block">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover hover:scale-110 transition-all ease-in-out duration-300"
          />
        </picture>
        <hr className="my-4 border-second" />
        <h1 className="text-xl mt-4 font-bold text-center text-second">
          {title}
        </h1>
        <hr className="my-4 border-second" />
        <p className="text-sm mt-4 md:text-base text-second text-justify">
          {isHovered
            ? description
            : description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
      </div>
    </>
  );

  return (
    <ScrollAnimation>
      <div
        className="bg-primary p-4 rounded-lg mx-6 flex flex-col hover:scale-105 transition-all duration-300 ease-in-out cursor-grab"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isExternal ? (
          <a href={destination} target="_blank" rel="noopener noreferrer">
            {cardContent}
          </a>
        ) : (
          <Link to={destination}>{cardContent}</Link>
        )}
      </div>
    </ScrollAnimation>
  );
};

export default CardBox;
