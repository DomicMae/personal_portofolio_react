import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import BodyProject from "../Components/BodyProject";

export default function ProjectPage(props) {
  useEffect(() => {
    console.log(props.auth.user); // This will log the user object
  }, [props.auth.user]); // Run the effect when props.auth.user changes
  return (
    <div className="min-h-screen flex flex-col bg-custom-red">
      <Navbar user={props.auth.user} />
      <main className="mt-24">
        {" "}
        {/* Tambahkan margin-top */}
        <BodyProject />
      </main>
    </div>
  );
}
