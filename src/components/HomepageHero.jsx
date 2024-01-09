import React from "react";
import Socials from "./Socials";

const Hero = () => (
  <div className="mt-[4.5rem] ss:mt-[7rem] mx-6 sm:mx-[4em] lg:ml-[4em] xl:mx-0 md:flex lg:px-[4em]">
    <div className="left flex-[80%]">
      <div className="upper flex">
        <h1 className="text-white text-[3rem] lg:text-[4rem] leading-[1.5em] font-krona">
          You're Made <br className="md:hidden" />
          <span className="bg-six font-bold">4 More!</span>
        </h1>
      </div>

      <div className="lower">
        <div className="sm:flex items-end md:items-start md:flex-col">
          <p className="text-two text-[1.5rem] lg:text-[2.5rem] leading-[1.5em] py-4 font-krona lg:max-w-[500px] max-w-[330px]">
            ...you just have to know you are.
          </p>
          <div className="">
            <p className="text-[.7rem] md:text-[.9rem] p-1 bg-six inline rounded relative text-white">
              Going about it the right way, is the right way to go about it...
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="right flex md:justify-end">
      <Socials social="flex md:flex-col md:fixed fixed bottom-[2em]" icon="mr-6 transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 p-2 md:mb-6"/>
    </div>
  </div>
);

export default Hero;

