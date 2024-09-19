import { useState, useEffect } from "react";
import { Linkedin, Instagram, Github } from "lucide-react";
import BodyHomePage from "../Components/BodyHomePage";
import Navbar from "../Components/Navbar";
import BodySkill from "../Components/BodySkill";
import BodyAboutMePage from "../Components/BodyAboutMePage";
import BodyProject from "../Components/BodyProject";
import BodyContactPage from "../Components/BodyContactPage";

export default function HomePage(props) {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [showContent, setShowContent] = useState(false); // State to add a fade-in effect for the content

  useEffect(() => {
    // Simulate data fetching or any other async operation
    setTimeout(() => {
      console.log(props.auth.user); // This will log the user object
      setIsLoading(false); // Set loading to false once the data is available

      // Add a slight delay before showing content to enhance the transition effect
      setTimeout(() => {
        setShowContent(true); // Show content after slight delay
      }, 500); // Delay before showing content (optional)
    }, 1000); // Simulate a longer delay (1.5 seconds) for more visible loading effect
  }, [props.auth.user]); // Run the effect when props.auth.user changes

  if (isLoading) {
    // Show loading spinner when the page is still loading
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
      <main className="mt-24">
        {/* Section BodyHomePage */}
        <section id="body-home" className="py-10">
          <BodyHomePage />
        </section>

        {/* Section BodyAboutMePage */}
        <section id="about-me" className="py-10">
          <BodyAboutMePage />
        </section>

        {/* Section BodySkill */}
        <section id="skills" className="py-10">
          <BodySkill />
        </section>

        {/* Section BodyProject */}
        <section id="project" className="py-10">
          <BodyProject />
        </section>

        {/* Section BodyContactPage */}
        <section id="contact" className="py-10">
          <BodyContactPage />
        </section>

        {/* Footer Section */}
        <footer className="footer footer-center bg-black text-base-content text-white text-center pt-8 pb-8 justify-center">
          <aside>
            <p>© {new Date().getFullYear()} Ardon - All right reserved</p>
          </aside>
          <nav>
            <div className="flex justify-center pt-8 gap-x-4">
              <button className="">
                <Linkedin className="w-10 h-10" />
              </button>

              <button className="">
                <Instagram className="w-10 h-10" />
              </button>

              <button className="">
                <Github className="w-10 h-10" />
              </button>
            </div>
          </nav>
        </footer>
      </main>
    </div>
  );
}
