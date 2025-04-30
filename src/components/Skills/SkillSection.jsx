import IconBox from "./IconBox";
import icons from "../../assets/icons";

const SkillSection = () => {
  return (
    <div className="bg-primary rounded-lg flex gap-2 py-8 px-2 mx-6 md:mx-12 flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-center gap-4 items-center">
        <IconBox icon={icons["icons8-html-48.png"]} label="HTML5" />
        <IconBox icon={icons["icons8-css-50.png"]} label="CSS3" />
        <IconBox icon={icons["icons8-javascript-64.png"]} label="Javascript" />
        <IconBox
          icon={icons["icons8-tailwindcss-48.png"]}
          label="Tailwind CSS"
        />
        <IconBox icon={icons["icons8-react-native-96.png"]} label="React JS" />
        <IconBox icon={icons["icons8-php-64.png"]} label="PHP" />
        <IconBox icon={icons["icons8-laravel-64.png"]} label="Laravel" />
        <IconBox icon={icons["icons8-sql-64.png"]} label="MySQL" />
        <IconBox icon={icons["icons8-python-64.png"]} label="Python" />
        <IconBox icon={icons["icons8-excel-100.png"]} label="Excel" />
      </div>
    </div>
  );
};

export default SkillSection;