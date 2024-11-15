import "../input.css";

const BodyHomePage = ({ user }) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-black">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left section with text */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="flex flex-col justify-center min-h- px-10 pb-20">
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold sm:text-5xl text-custom-orange pb-2">
              Hello!!
            </h1>
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold sm:text-5xl text-custom-white pb-2">
              I’m Ardon Yunors Tallan,
            </h1>
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold sm:text-5xl text-custom-orange pb-2">
              Fresh Graduated Programmer
            </h1>
            <h1 className="text-4xl md:text-5xl font-jakarta font-bold sm:text-5xl text-custom-white pb-4 md:pb-8">
              Web Developer
            </h1>
          </div>
        </div>

        {/* Right section with image */}
        <div className="md:col-span-1 flex justify-center items-center pb-20">
          <img
            src="foto.svg"
            alt="Description"
            className="rounded-full w-108 h-108 md:w-116 md:h-116"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyHomePage;
