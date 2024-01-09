import icon from "../assets/images/done.svg";
import search from "../assets/images/search.svg";
import img1 from "../assets/images/1.jpg";
import Popup from "./Popup";
import { useState } from "react";

const Hero = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const showPopup = () => {
    setPopupVisible(true);
  };
  return (
    <div className="hero-container mt-[4em] flex justify-center">
      <div className="md:flex gap-[2em]">
        <div className="detail-container h-auto w-[370px] ">
          <div className="user-details p-4 rounded-2xl mb-5 bg-black/[.3] hero-content flex gap-5 items-start text-white">
            <div className="right">
              <img
                src={img1}
                className="w-[7em] object-contain object-fit rounded-full"
                alt=""
              />
              <div className="edit-button text-center mt-2 text-[.8rem]">
                <button className="border border-six rounded-full px-2">
                  edit
                </button>
              </div>
            </div>
            <div className="bio">
              <div className="username text-six">Godwin Praise</div>
              <div className="quick-bio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, sapiente?
              </div>
            </div>
          </div>
        </div>
        <div className="hero-content bg-black/[.3] h-auto w-[370px] p-4 rounded-2xl">
          <div>
            <h1 className="text-center font-poppins text-six pb-6 text-[1.5em]">
              Recently Read Posts
            </h1>
            <div
              className={`popup fixed inset-0 ${
                isPopupVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 pointer-events-none"
              } flex items-center justify-center transition-opacity transition-transform duration-300 ease-in-out`}
            >
              <Popup />
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
            <div className="button text-center">
              <button
                className="bg-six px-3 text-[.8rem] rounded-xl"
                onClick={showPopup}
              >
                see all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
