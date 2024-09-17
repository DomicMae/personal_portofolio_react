import "../input.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
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
          if (entry.target.id === "contact") {
            setIsContactVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: null, // Use the viewport
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Target the sections with id="about-me" and id="skills"
    const aboutMeSection = document.getElementById("about-me");
    const skillsSection = document.getElementById("skills");
    const projectSection = document.getElementById("project");
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
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar bg-white dark:bg-custom-red fixed w-full top-0 start-0 z-20">
      <div className="grid grid-cols-3 items-center justify-between mx-auto pr-6 pl-6">
        <a href="/" className="flex items-center col-span-1">
          <img src="/logo.png" alt="" />
          <span className="text-2xl font-medium text-white font-redhat">
            ARDON
          </span>
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
          <button
            type="button"
            className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white-600 dark:hover:bg-gray-700 dark:focus:ring-white-800
  transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Resume
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="transition ease-in-out delay-150 duration-300 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
