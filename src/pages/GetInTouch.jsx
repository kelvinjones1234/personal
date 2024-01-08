import React from "react";
import Hero from "../components/GetInTouchHero";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

const GetInTouch = () => {
  return (
    <div className="bg-background-image bg-center w-full h-screen fixed bg-cover lg:px-[4em]">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="grid justify-center text-center md:flex gap-[4em]">
        <div className="form-container bg-black py-[2em] my-[4em] w-[300px] sm:w-[400px] rounded-xl opacity-95">
          <Hero />
        </div>
        <div>
          <Socials
            social="flex md:flex-col md:fixed fixed bottom-[2em] md:bottom-[6.2em]"
            icon="mr-6 transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 p-2 md:mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
