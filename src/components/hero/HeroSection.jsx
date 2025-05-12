import images from "../../assets/images";
import React from "react";
import Typewriter from "typewriter-effect";
import ScrollAnimation from "../loading/ScrollAnimation";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-evenly px-6 py-8 md:px-12 sm:flex-row-reverse md:gap-8 h-screen pb-24 md:pb-0" id="hero">
      <ScrollAnimation direction="right" delay={0.3}>
        <div>
          <img
            src={images["ImageHero.png"]}
            alt="Illustrasi Joko Setyanto"
            className="w-64 md:w-96"
            style={{ filter: "drop-shadow(10px 10px 24px hexa(#000000))" }}
          />
        </div>
      </ScrollAnimation>
      <ScrollAnimation direction="left" delay={0.3}>
      <div className=" flex flex-col items-start md:px-6">
        <h2 className="text-xl font-semibold text-left md:text-2xl lg:text-3xl text-second font-cabin mt-4">
          Hello Guys
        </h2>
        <h1 className="text-4xl font-bold mt-2 text-left lg:text-6xl text-second font-oswald">
          I'm Joko Setyanto
        </h1>
        <h1 className="text-2xl font-semibold mt-4 text-center md:text-3xl lg:text-5xl text-second font-cabin">
          <Typewriter
            options={{
              strings: ["Web Developer", "Data Analyst"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <a href="/CV_Joko Setyanto.pdf" download>
          <button className="mt-6 bg-second text-primary px-8 py-4 rounded-xl font-semibold cursor-pointer md:mt-8 md:w-48 md:font-bold hover:scale-110 transition-all duration-300 ease-in-out font-cabin">
            Download CV
          </button>
        </a>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default HeroSection;
