import BodyHomePage from "../Components/BodyHomePage";
import Navbar from "../Components/Navbar";

export default function HomePage(props) {
  return (
    <div className="min-h-screen flex flex-col bg-custom-red">
      <Navbar user={props.auth.user} />
      <main className="mt-24">
        {" "}
        {/* Tambahkan margin-top */}
        <BodyHomePage />
      </main>
    </div>
  );
}
