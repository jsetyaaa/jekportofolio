import images from "../../assets/images";
import React from "react";
import Typewriter from "typewriter-effect";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 bg-primary md:py-8 py-16 md:px-12 md:flex-row-reverse md:gap-4">
      <div className="md:w-1/2">
        <img
          src={images["MyFoto.png"]}
          alt="Foto Joko Setyanto"
          className=""
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-center md:px-6">
        <h1 className="text-2xl font-bold mt-4 text-center md:text-3xl lg:text-5xl text-second font-cabin">
          <Typewriter
            options={{
              strings: [
                "Hi, I'm Joko Setyanto",
                "I'm Web Developer",
                "I'm Data Analyst",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p
          id="About Joko Setyanto"
          className="my-6 text-center md:text-lg md:mt-8 lg:text-xl lg:mt-12 font-semibold text-second font-gummy"
        >
          I'm a passionate Web Developer and aspiring Data Analyst with a strong
          interest in building modern, responsive websites and transforming data
          into meaningful insights. Let's create something impactful together.
        </p>
        <a href="/CV_Joko Setyanto.pdf" download>
          <button className="mt-4 bg-second text-primary px-8 py-4 rounded-xl font-semibold cursor-pointer md:mt-8 lg:mt-12 md:w-48 md:font-bold hover:scale-110 transition-all duration-300 ease-in-out font-cabin">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
