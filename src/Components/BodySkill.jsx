import "../input.css";

const BodySkill = ({ user }) => {
  return (
    <div className="text-black pb-20">
      {" "}
      {/* Semua teks di dalam div ini akan berwarna hitam */}
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-custom-orange">
          My
        </h1>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-white">
          Skill
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-2 pb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-2xl text-white">
          Skill
        </h1>
      </div>
      <div className="items-center justify-center grid grid-cols-4 ">
        <div className="col-span-1 flex flex-col items-center justify-center ">
          <img src="php.png" alt="" className="rounded-md w-82 h-82 pt-6" />
          <p className="font-medium text-custom-orange text-xl text-center pt-6">
            PHP
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="js.png" alt="" className="rounded-md w-82 h-82" />
          <p className="font-medium text-custom-orange text-xl text-center">
            JavaScript
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="html.png" alt="" className="rounded-md w-82 h-82 pt-4" />
          <p className="font-medium text-custom-orange text-xl text-center pb-4">
            HTML
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="css.png" alt="" className="rounded-md w-82 h-82 pb-4" />
          <p className="font-medium text-custom-orange text-xl text-center pb-3">
            CSS
          </p>
        </div>
      </div>
      <div className="items-center justify-center grid grid-cols-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img
            src="sql.png"
            alt=""
            className="rounded-md w-82 h-82 pt-6 pb-4"
          />
          <p className="font-medium text-custom-orange text-xl text-center pt-4">
            SQL
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center ">
          <img src="react.png" alt="" className="rounded-md w-20 h-24 pt-4" />
          <p className="font-medium text-custom-orange text-xl text-center pt-8">
            React
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img src="laravel.png" alt="" className="rounded-md w-82 h-82" />
          <p className="font-medium text-custom-orange text-xl text-center">
            Laravel
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img
            src="bootstrap.png"
            alt=""
            className="rounded-md w-82 h-82 pt-4"
          />
          <p className="font-medium text-custom-orange text-xl text-center pb-4">
            Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodySkill;
