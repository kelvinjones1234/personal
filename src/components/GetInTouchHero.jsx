import React from "react";
import Socials from "./Socials";

const Hero = () => (
  <div className="input-container font-poppins">
    <div className="py-8 rounded-xl bg-black/[.5] text-center mx-auto my-[4em] max-w-[420px]">
      <h1 className="text-white text-[2em]">Get in touch</h1>
      <input
        type="text"
        className="mb-3 mt-[1.5em] bg-black/[0] border border-one rounded-[.5em] w-[19em] px-2 py-1 text-white"
        placeholder="name"
      />{" "}
      <br />
      <textarea
        type="text"
        rows="5"
        className="my-3 bg-black/[0] border border-one rounded-[.5em] w-[19em] px-2 py-1 text-white"
        placeholder="message"
      />{" "}
      <br />
      <div className="bg-six max-w-[19em] mx-auto rounded-[.5em] py-1">
        <button className="">Send</button>
      </div>
    </div>
  </div>
);

export default Hero;
