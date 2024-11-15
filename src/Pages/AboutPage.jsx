import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import BodyAboutMePage from "../Components/BodyAboutMePage";

export default function AboutPage(props) {
  useEffect(() => {
    console.log(props.auth.user); // This will log the user object
  }, [props.auth.user]); // Run the effect when props.auth.user changes
  return (
    <div className="min-h-screen flex flex-col bg-custom-black">
      <Navbar user={props.auth.user} />
      <main className="mt-24">
        {" "}
        {/* Tambahkan margin-top */}
        <BodyAboutMePage />
      </main>
    </div>
  );
}
