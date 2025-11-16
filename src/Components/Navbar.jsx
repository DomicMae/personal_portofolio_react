import "../input.css";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // You can use any icon library for the hamburger menu

const Navbar = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isSertifikatVisible, setIsSertifikatVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          switch (entry.target.id) {
            case "skills":
              setIsSkillsVisible(entry.isIntersecting);
              break;
            case "project":
              setIsProjectVisible(entry.isIntersecting);
              break;
            case "sertifikat":
              setIsSertifikatVisible(entry.isIntersecting);
              break;
            case "contact":
              setIsContactVisible(entry.isIntersecting);
              break;
            default:
              break;
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const skillsSection = document.getElementById("skills");
    const projectSection = document.getElementById("project");
    const sertifikatSection = document.getElementById("sertifikat");
    const contactSection = document.getElementById("contact");

    if (skillsSection) observer.observe(skillsSection);
    if (projectSection) observer.observe(projectSection);
    if (sertifikatSection) observer.observe(sertifikatSection);
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
      if (projectSection) observer.unobserve(projectSection);
      if (sertifikatSection) observer.unobserve(sertifikatSection);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume Me.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar bg-white dark:bg-custom-red fixed w-full py-4 font-jakarta z-20">
      <div className="px-10 ">
        <div className="flex items-center justify-between px-2 md:px-4">
          <a href="/" className="flex items-center">
            <img src="/favicon.png" alt="Logo" className="h-16" />
          </a>
          <button
            className="md:hidden text-black focus:outline-none px-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-custom-white" />
          </button>
          <div className="items-center justify-center col-span-1 hidden md:flex">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-custom-red dark:border-gray-700">
              <li>
                <button
                  onClick={() => handleScrollTo("skills")}
                  className={`transition ease-in-out delay-150 duration-300 block py-2 px-3 md:p-0 font-bold ${
                    isSkillsVisible
                      ? "text-custom-blue -translate-y-1 scale-110"
                      : "text-custom-white"
                  }`}
                >
                  Skill
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("project")}
                  className={`transition ease-in-out delay-150 duration-300 block py-2 px-3 md:p-0 font-bold ${
                    isProjectVisible
                      ? "text-custom-blue -translate-y-1 scale-110"
                      : "text-custom-white"
                  }`}
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("sertifikat")}
                  className={`transition ease-in-out delay-150 duration-300 block py-2 px-3 md:p-0 font-bold ${
                    isSertifikatVisible
                      ? "text-custom-blue -translate-y-1 scale-110"
                      : "text-custom-white"
                  }`}
                >
                  Sertifikat
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className={`transition ease-in-out delay-150 duration-300 block py-2 px-3 md:p-0 font-bold ${
                    isContactVisible
                      ? "text-custom-blue -translate-y-1 scale-110"
                      : "text-custom-white"
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="items-center col-span-1 justify-end hidden md:flex">
            <div>
              <button
                type="button"
                id="downloadButton"
                onClick={handleDownload}
                className="group relative text-black bg-white hover:bg-custom-blue hover:text-custom-white focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white-600 dark:group-hover:bg-custom-blue transition-transform ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-custom-red dark:bg-custom-red">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <button
                onClick={() => handleScrollTo("skills")}
                className={`block w-full text-left px-1 ${
                  isSkillsVisible ? "text-custom-blue" : "text-custom-white"
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("project")}
                className={`block w-full text-left px-1 ${
                  isProjectVisible ? "text-custom-blue" : "text-custom-white"
                }`}
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("sertifikat")}
                className={`block w-full text-left px-1 ${
                  isSertifikatVisible ? "text-custom-blue" : "text-custom-white"
                }`}
              >
                Sertifikat
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("contact")}
                className={`block w-full text-left px-1 ${
                  isContactVisible ? "text-custom-blue" : "text-custom-white"
                }`}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={handleDownload}
                className="block w-full text-left bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-custom-blue hover:text-custom-white"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
