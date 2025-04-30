const IconBox = ({ icon, label }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-36">
      <img src={icon} alt={label} className="w-20 h-20 hover:scale-125 transition-all duration-300 ease-in-out cursor-grab" />
      <span className="text-xl font-bold text-second font-cabin">{label}</span>
    </div>
  );
};

export default IconBox;