import img1 from "../assets/images/1.jpg";
import icon from "../assets/images/done.svg";

const Popup = () => (
  <div>
    <div className="hero-content bg-black h-auto w-[370px] p-4 rounded-2xl">
      <div>
        <h1 className="text-center font-poppins text-six pb-6 text-[1.5em]">
          Recently Read Posts
        </h1>
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
      <div className="completed-book text-white flex bg-black p-3 mb-3 rounded-2xl">
        <p className="flex-[80%]">Book title</p>
        <p className="flex-[15%]">Date</p>
        <img src={icon} alt="" />
      </div>
    </div>
  </div>
);

export default Popup;
