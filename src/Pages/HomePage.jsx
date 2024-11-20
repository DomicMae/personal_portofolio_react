import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, Github } from "lucide-react";
import BodyHomePage from "../Components/BodyHomePage";
import Navbar from "../Components/Navbar";
import BodySkill from "../Components/BodySkill";
import BodyAboutMePage from "../Components/BodyAboutMePage";
import BodyProject from "../Components/BodyProject";
import BodyContactPage from "../Components/BodyContactPage";
import BodySertifikatPage from "../Components/BodySertifikatPage";

export default function HomePage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Disable right-click across the page
    const handleRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(props.auth.user); // This will log the user object
      setIsLoading(false);

      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, 1000);
  }, [props.auth.user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="loading loading-spinner loading-lg animate-spin text-black"></span>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col bg-custom-red transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar user={props.auth.user} />
      <main className="mt-24 font-jakarta">
        <section id="body-home" className="w-full min-h-screen">
          <BodyHomePage />
        </section>

        <section
          id="about-me"
          className="w-full min-h-screen py-10 bg-custom-black"
        >
          <BodyAboutMePage />
        </section>

        <section id="skills" className="w-full min-h-screen py-10">
          <BodySkill />
        </section>

        <section
          id="project"
          className="w-full min-h-screen py-10 bg-custom-black"
        >
          <BodyProject />
        </section>

        <section id="sertifikat" className="w-full min-h-screen py-10">
          <BodySertifikatPage />
        </section>

        <section
          id="contact"
          className="w-full min-h-screen py-10 bg-custom-black"
        >
          <BodyContactPage />
        </section>

        <footer className="footer footer-center bg-black text-base-content text-white text-center pt-8 pb-8 justify-center">
          <aside>
            <p>© {new Date().getFullYear()} Ardon - All right reserved</p>
          </aside>
          <nav>
            <div className="flex justify-center pt-8 gap-x-4">
              <a
                href="https://www.linkedin.com/in/ardonyunors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Linkedin className="w-10 h-10" />
                </button>
              </a>

              <a
                href="https://www.instagram.com/ardonyunors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Instagram className="w-10 h-10" />
                </button>
              </a>

              <a
                href="https://github.com/DomicMae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Github className="w-10 h-10" />
                </button>
              </a>
            </div>
          </nav>
        </footer>
      </main>
    </div>
  );
}
