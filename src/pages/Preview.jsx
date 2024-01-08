import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/SinglepostHeroPreview";
import Footer from "../components/Footer";

const Preview = () => {
  return (
    <div className="bg-background-image bg-center w-full bg-cover lg:px-[4em]">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="hero flex justify-center">
        <div className="xl:max-w-[1280px] w-full lg:flex sm:mb-[2em]">
          <Hero props={{recent:"Books", related:"Books"}}/>
        </div>
      </div>
      <div className="sm:px-16 px-6">
        <Footer styles="sm:flex-col bottom-nav w-full flex justify-between text-white" />
      </div>
    </div>
  );
};

export default Preview;
