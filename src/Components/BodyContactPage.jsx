import { ArrowDown } from "lucide-react";
import "../input.css";

const BodyContactPage = ({ user }) => {
  return (
    <div className="text-black pb-20">
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-custom-orange">
          Project
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-2 pb-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-2xl text-white">
          Check in here
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <ArrowDown size={32} className="text-custom-orange" />
      </div>

      <a
        href="https://github.com/DomicMae"
        className="flex items-center justify-center col-span-1"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src="github.png"
            alt="GitHub"
            className="rounded-md w-82 h-82 pt-6"
          />
          <p className="font-medium text-custom-orange text-xl text-center pt-6">
            GitHub
          </p>
        </div>
      </a>

      {/* Kode lainnya */}
    </div>
  );
};

export default BodyContactPage;