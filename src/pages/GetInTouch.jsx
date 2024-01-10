import React from "react";
import Hero from "../components/GetInTouchHero";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

const GetInTouch = () => {
  return (
    <div className="bg-background-image bg-center h-screen fixed w-full bg-cover">
      <div className="bg-black/[.2] h-full">
        <div className="sm:px-16 px-6 flex justify-center lg:px-[8em] items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
        <div className="hero">
          <div className="xl:max-w-[1280px] w-full fixed">
            <Hero />
          </div>
          <div className="fixed bottom-[2em] sm:hidden">
            <Socials
              social="flex px-6"
              icon="mr-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
