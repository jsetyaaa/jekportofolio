import images from "../../assets/images";
import React from "react";
import ScrollAnimation from "../loading/ScrollAnimation";
import { FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="py-8 md:py-4 min-h-screen px-6 md:px-12 flex flex-col items-center justify-start" id="about">
      <ScrollAnimation direction="up" delay={0.3}>
        <h1 className="text-5xl font-bold text-center mb-4 text-second font-gummy">
          About Me
        </h1>
      </ScrollAnimation>
      <div className="flex flex-col md:flex-row md:items-center md:py-16 gap-4 md:gap-8 mt-6 md:mt-12 w-full px-2 md:px-12">
        <ScrollAnimation direction="left" delay={0.3}>
        <div className="">
          <img
            src={images["MyFoto.webp"]}
            alt="Illustrasi Joko Setyanto"
            className="mx-auto w-full cursor-grab hover:scale-110 transition-all duration-300 ease-in-out"
            loading="lazy"
          />
        </div>
        </ScrollAnimation>
        <ScrollAnimation direction="right" delay={0.3}>
        <div className="flex flex-col justify-center items-center gap-6 md:items-start px-4 md:px-12">
          <p className="text-justify text-lg md:text-xl mt-4 text-second font-cabin">
            Halo selamat datang di Website Portofolio saya, saya merupakan
            seorang Web Developer dan Data Analyst yang memiliki minat besar
            pada pembuatan solusi digital dan pengolahan data. Saya memiliki
            pengalaman dalam pengembangan web dan analisis data. Mari
            berkontribusi bersama!
          </p>
          <a href="https://wa.me/6289679030938">
            <button className="mt-6 bg-second text-primary px-8 py-4 rounded-xl font-semibold cursor-pointer md:mt-8 md:w-52 text-center md:font-bold hover:scale-110 transition-all duration-300 ease-in-out font-cabin flex items-center">
              Hubungi Saya
              <FaWhatsapp className="ml-2 text-2xl" />
            </button>
          </a>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default AboutSection;
