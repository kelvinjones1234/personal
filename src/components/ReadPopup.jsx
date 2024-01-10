import img1 from "../assets/images/1.jpg";
import icon from "../assets/images/done.svg";

const Popup = ({ close }) => (
  <div className="bg-black p-4 rounded-2xl">
    <h1 className="text-center font-poppins text-six pb-6 text-[1.5em]">
      Recently Read Posts
    </h1>
    <div className="hero-content rounded-2xl h-[400px] w-[330px] overflow-scroll">
      <div></div>
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
    <div className="text-center">
      <button
        className="rounded-xl border border-six px-2 text-white hover:bg-six transition duration-500 ease-in-out text-[.8rem] rounded-xl"
        onClick={close}
      >
        Close
      </button>
    </div>
  </div>
);

export default Popup;
