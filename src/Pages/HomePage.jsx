import { useEffect } from "react";
import BodyHomePage from "../Components/BodyHomePage";
import Navbar from "../Components/Navbar";
import BodySkill from "../Components/BodySkill";
import BodyAboutMePage from "../Components/BodyAboutMePage";

export default function HomePage(props) {
  useEffect(() => {
    console.log(props.auth.user); // This will log the user object
  }, [props.auth.user]); // Run the effect when props.auth.user changes

  return (
    <div className="min-h-screen flex flex-col bg-custom-red">
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
      </main>
    </div>
  );
}
