import IconBox from "./IconBox";
import icons from "../../assets/icons";
import ScrollAnimation from "../loading/ScrollAnimation";

const SkillSection = () => {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className="bg-transparent min-h-screen rounded-lg flex gap-4 md:gap-12 py-8 px-2 mx-6 md:mx-12 flex-wrap flex-col justify-center items-center md:justify-start mt-6 md:mt-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-second font-gummy">My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-10 mt-6">
          <IconBox icon={icons["icons8-html-48.png"]} label="HTML5" />
          <IconBox icon={icons["icons8-css-50.png"]} label="CSS3" />
          <IconBox
            icon={icons["icons8-javascript-64.png"]}
            label="Javascript"
          />
          <IconBox
            icon={icons["icons8-tailwindcss-48.png"]}
            label="Tailwind CSS"
          />
          <IconBox
            icon={icons["icons8-react-native-96.png"]}
            label="React JS"
          />
          <IconBox icon={icons["icons8-php-64.png"]} label="PHP" />
          <IconBox icon={icons["icons8-laravel-64.png"]} label="Laravel" />
          <IconBox icon={icons["icons8-sql-64.png"]} label="MySQL" />
          <IconBox icon={icons["icons8-python-64.png"]} label="Python" />
          <IconBox icon={icons["icons8-excel-100.png"]} label="Excel" />
        </div>
      </div>
      </ScrollAnimation>
  );
};

export default SkillSection;
