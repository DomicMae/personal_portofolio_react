import "../input.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isSertifikatVisible, setIsSertifikatVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to detect when #about-me and #skills are visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about-me") {
            setIsAboutMeVisible(entry.isIntersecting);
          }
          if (entry.target.id === "skills") {
            setIsSkillsVisible(entry.isIntersecting);
          }
          if (entry.target.id === "project") {
            setIsProjectVisible(entry.isIntersecting);
          }
          if (entry.target.id === "sertifikat") {
            setIsSertifikatVisible(entry.isIntersecting);
          }
          if (entry.target.id === "contact") {
            setIsContactVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: null, // Use the viewport
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    // Target the sections with id="about-me" and id="skills"
    const aboutMeSection = document.getElementById("about-me");
    const skillsSection = document.getElementById("skills");
    const projectSection = document.getElementById("project");
    const sertifikatSection = document.getElementById("sertifikat");
    const contactSection = document.getElementById("contact");

    if (aboutMeSection) {
      observer.observe(aboutMeSection);
    }
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    if (projectSection) {
      observer.observe(projectSection);
    }
    if (sertifikatSection) {
      observer.observe(sertifikatSection);
    }
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      // Clean up the observer when the component is unmounted
      if (aboutMeSection) {
        observer.unobserve(aboutMeSection);
      }
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
      if (projectSection) {
        observer.unobserve(projectSection);
      }
      if (sertifikatSection) {
        observer.unobserve(sertifikatSection);
      }
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log("Scrolling to:", sectionId); // Add log
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    // Create an invisible link
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Path relative to the public directory
    link.download = "Resume.pdf"; // Filename for download

    // Append the link to the body and trigger click
    document.body.appendChild(link);
    link.click();

    // Remove the link after download
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar bg-white dark:bg-custom-red fixed w-full top-0 start-0 z-20">
      <div className="grid grid-cols-3 items-center justify-between mx-auto pr-6 pl-6">
        <a href="/" className="flex items-center col-span-1">
          <img src="/logo.png" alt="" />
        </a>
        <div className="flex items-center justify-center col-span-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-custom-red dark:border-gray-700">
            <li>
              <button
                onClick={() => handleScrollTo("about-me")}
                className={`transition ease-in-out delay-150 duration-300 block py-2 px-3 md:p-0 font-bold ${
                  isAboutMeVisible
                    ? "text-custom-blue -translate-y-1 scale-110"
                    : "text-white"
                }`}
              >
                About Me
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollTo("skills")}
                className={`transition ease-in-out delay-150 duration-300 block py-2 px-3 md:p-0 font-bold ${
                  isSkillsVisible
                    ? "text-custom-blue -translate-y-1 scale-110"
                    : "text-white"
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
                    : "text-white"
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
                    : "text-white"
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
                    : "text-white"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center col-span-1 justify-end ">
          <div>
            <button
              type="button"
              id="downloadButton"
              onClick={handleDownload}
              className="group relative text-black bg-white hover:bg-custom-blue hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white-600 dark:group-hover:bg-custom-blue dark:focus:ring-white-800
    transition-transform ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
