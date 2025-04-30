import ScrollAnimation from "../loading/ScrollAnimation";

const CardBox = ({ thumbnail, title, description, url }) => {
  return (
    <ScrollAnimation>
      <div className="bg-primary p-4 rounded-lg mx-6 flex flex-col hover:-rotate-6 transition-all duration-300 ease-in-out cursor-grab">
        <img src={thumbnail} alt={title} className="object-cover" />
        <h1 className="text-xl mt-4 font-bold">{title}</h1>
        <p className="text-sm mt-4 md:text-base">{description}</p>
        <a href={url} className="flex justify-end">
          <button className="px-6 py-4 mt-4 bg-second hover:bg-third text-primary rounded-lg cursor-pointer font-bold">
            See More
          </button>
        </a>
      </div>
    </ScrollAnimation>
  );
};

export default CardBox;
