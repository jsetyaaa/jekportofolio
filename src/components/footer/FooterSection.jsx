import icons from "../../assets/icons";

const FooterSection = () => {
  return (
    <div className="bg-primary w-full mt-12 py-4 md:py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <h1 className="text-lg md:text-2xl font-bold text-second cursor-pointer font-gummy">
        mySosialMedia
      </h1>
      <div className="flex gap-4 md:gap-8">
        <a
          href={"https://www.facebook.com/jokocurvasud/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons["icons8-facebook-50.png"]}
            alt="Facebook Joko Setyanto"
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300 text-second"
          />
        </a>
        <a
          href={"https://www.instagram.com/jsetya24/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons["icons8-instagram-64.png"]}
            alt="Instagram Joko Setyanto"
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300 text-second"
          />
        </a>
        <a
          href={"https://github.com/jsetyaaa/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons["icons8-github-50.png"]}
            alt="Github Joko Setyanto"
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300 text-second"
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/joko-setyanto-60a12b298/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons["icons8-linkedin-50.png"]}
            alt="LinkedIn Joko Setyanto"
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300 text-second"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
