import { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { FaHome, FaUser, FaTools, FaBriefcase } from "react-icons/fa";

const sections = [
  { id: "hero", icon: <FaHome /> },
  { id: "about", icon: <FaUser /> },
  { id: "skills", icon: <FaBriefcase /> },
  { id: "projects", icon: <FaTools /> },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 overflow-x-hidden w-full z-50 flex justify-around bg-primary/80 py-4 shadow-md md:hidden">
        {sections.map((section) => (
          <ScrollLink
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActive(section.id)}
            className={`text-3xl cursor-pointer transition-colors ${
              active === section.id ? "text-third" : "text-white"
            }`}
          >
            {section.icon}
          </ScrollLink>
        ))}
      </div>

      {/* Desktop Right Dot Navbar */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 z-50">
        {sections.map((section) => (
          <ScrollLink
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActive(section.id)}
            className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-colors ${
              active === section.id ? "bg-third border-third" : "bg-white border-white"
            }`}
          />
        ))}
      </div>
    </>
  );
}
