import "../input.css";

const BodyHomePage = ({ user }) => {
  return (
    <div className="text-black pb-18">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-16">
        {/* Left section with text */}
        <div className="md:col-span-2 flex-col p-8">
          <h1 className="text-4xl md:text-5xl font-bold sm:text-5xl text-custom-orange pb-2">
            Hello!!
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold sm:text-5xl text-white pb-2">
            I’m Ardon Yunors Tallan,
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold sm:text-5xl text-custom-orange pb-2">
            Fresh Graduated Programmer
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold sm:text-5xl text-custom-orange pb-4 md:pb-8">
            Web Developer
          </h1>
        </div>

        {/* Right section with image */}
        <div className="md:col-span-1 flex justify-center items-center">
          <img
            src="foto.png"
            alt="Description"
            className="rounded-full w-108 h-108 md:w-116 md:h-116"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyHomePage;
