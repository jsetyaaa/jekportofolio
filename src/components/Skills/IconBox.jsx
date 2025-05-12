const IconBox = ({ icon, label }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-36 rounded-lg p-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-grab">
      <img src={icon} alt={label} className="w-16 h-16" />
      <span className="text-xl font-bold text-second font-cabin">{label}</span>
    </div>
  );
};

export default IconBox;