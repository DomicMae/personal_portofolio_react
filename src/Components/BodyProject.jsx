import { ArrowDown } from "lucide-react";
import "../input.css";

const BodyProject = ({ user }) => {
  return (
    <div className="text-black pb-20">
      <div id="project" className="pt-24 text-center"></div>
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-custom-orange">
          Project
        </h1>
      </div>

      <div className="flex items-center justify-center space-x-2 pb-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-2xl text-white">
          Check in here
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 pt-12">
        {/* ArrowDown berada di atas gambar dan teks */}
        <ArrowDown size={32} className="animate-bounce text-custom-orange" />

        <a
          href="https://github.com/DomicMae"
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src="github.png"
              alt="GitHub"
              className="rounded-md w-82 h-82"
            />
            <p className="font-medium text-custom-orange text-xl text-center pt-6">
              GitHub
            </p>
          </div>
        </a>
      </div>

      {/* Kode lainnya */}
    </div>
  );
};

export default BodyProject;
