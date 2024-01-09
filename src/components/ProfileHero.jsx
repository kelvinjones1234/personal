import icon from "../assets/images/done.svg";
import search from "../assets/images/search.svg";

const Hero = () => {
  return (
    <div className="hero-container mt-[4em] flex justify-center">
      <div>
        <div className="hero-content bg-black/[.3] h-auto w-[370px] p-4 rounded-2xl">
          <div>
            <h1 className="text-center text-six py-6 text-[1.5em]">
              Recently Read Posts
            </h1>
            <div className="completed-book text-white flex bg-black p-3 mb-3 rounded-2xl">
              <p className="flex-[80%]">Book title</p>
              <p className="flex-[15%]">Date</p>
              <img src={icon} alt="" />
            </div>
            <div className="completed-book text-white flex bg-black p-3 mb-3 rounded-2xl">
              <p className="flex-[80%]">Book title</p>
              <p className="flex-[15%]">Date</p>
              <img src={icon} alt="" />
            </div>
            <div className="completed-book text-white flex bg-black p-3 mb-3 rounded-2xl">
              <p className="flex-[80%]">Book title</p>
              <p className="flex-[15%]">Date</p>
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="relative flex justify-center">
          <input
            type="text"
            className="w-[20em] opacity-50 h-7 border-none  rounded p-3 mb-6 text-black"
          />
          <img
            src={search}
            alt=""
            className="absolute right-8 bottom-[1.6em] cursor-pointer"
          />
        </div> */
}
