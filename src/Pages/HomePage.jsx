import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, Github } from "lucide-react";
import BodyHomePage from "../Components/BodyHomePage";
import Navbar from "../Components/Navbar";
import BodySkill from "../Components/BodySkill";
import BodyAboutMePage from "../Components/BodyAboutMePage";
import BodyProject from "../Components/BodyProject";
import BodyContactPage from "../Components/BodyContactPage";
import BodySertifikatPage from "../Components/BodySertifikatPage";
import { motion, useScroll } from "framer-motion";

export default function HomePage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll();

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
    <>
      {/* Scroll Indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 0, // 🔄 dari top ke bottom
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#DBAE52",
          zIndex: 50,
        }}
      />

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

          {/* <section id="skills" className="w-full min-h-screen">
            <BodySkill />
          </section> */}

          <section id="project" className="w-full min-h-screen bg-custom-black">
            <BodyProject />
          </section>

          <section id="sertifikat" className="w-full min-h-screen">
            <BodySertifikatPage />
          </section>

          <section
            id="contact"
            className="w-full min-h-screen py-10 bg-custom-black"
          >
            <BodyContactPage />
          </section>

          <footer className="footer bg-black text-white text-center pt-8 pb-8 flex flex-col md:flex-row justify-between px-6 md:px-12">
            {/* aside 1 */}
            <aside className="hidden md:flex flex-row items-start space-x-10">
              <a href="/" className="flex ">
                <img src="/favicon.png" alt="Logo" className="h-24" />
              </a>
              <div className="flex flex-col text-left">
                <h2 className="text-lg font-semibold">YATA</h2>
                <p className="text-sm max-w-md text-gray-400">
                  "Yatta" (やった) berarti "Aku berhasil!" atau "Yeay!", yang
                  sering digunakan untuk mengekspresikan kegembiraan atau
                  pencapaian.
                </p>
              </div>
            </aside>

            {/* aside 2 */}
            <aside className="flex flex-row items-center justify-center md:justify-end w-full md:w-auto space-x-6">
              <div className="flex flex-col">
                <p className="mb-5">
                  © {new Date().getFullYear()} Ardon - All rights reserved
                </p>

                <nav className="">
                  <div className="flex justify-center gap-x-8">
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
              </div>
            </aside>
          </footer>
        </main>
      </div>
    </>
  );
}
