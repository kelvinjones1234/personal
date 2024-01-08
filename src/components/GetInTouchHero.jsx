import React from "react";
import Socials from "./Socials";

const Hero = () => (
  <div className="input-container font-poppins">
    <h1 className="text-white text-[2em]">Get in touch</h1>
    <input
      type="text"
      className="my-5 sm:w-[20em] h-7 rounded p-3 w-[15em] opacity-50"
      placeholder="name"
    />
    <input
      type="text"
      className="m-5 sm:w-[20em] rounded px-3 w-[15em]"
      placeholder="email"
      hidden
    />
    <textarea
      type="text"
      rows="5"
      className="rounded p-3 w-[15em] sm:w-[20em] opacity-50"
      placeholder="message"
    />
    <button className="bg-six mx-5 mt-5 sm:w-[20em] rounded py-1 px-[6.2em] hover:bg-one transition ease-in-out duration-300">
      Send
    </button>
  </div>
);

export default Hero;
