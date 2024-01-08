import React from "react";
import Socials from "./Socials";
import img2 from "../assets/images/2.jpg";
import img1 from "../assets/images/1.jpg";
import img3 from "../assets/images/3.jpg";
import Footer from "./Footer";

const Hero = ({ prop }) => (
  <div className="mt-[4.5rem] ss:mt-[7rem] mx-6 sm:mx-[4em] xl:mx-0">
    <h1 className="text-[1em] relative bottom-12 mx-auto bg-one px-4 py-1 rounded-xl text-center table font-poppins">
      {prop.heading}
    </h1>
    <div className="sm:flex gap-[4em]">
      <div className="cards-container xs:columns-2 right ss:columns-3 lg:columns-4 flex-[80%] gap-[1.5em]">
        <div className="cards rounded-2xl">
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img2}
              alt=""
              className="rounded-2xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img3}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />

            <p className="text-[1em] relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img2}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img1}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img2}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img1}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img3}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img2}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img1}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img3}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
          <div className="card break-inside-avoid transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
            <img
              src={img3}
              alt=""
              className="rounded-xl cover fit hover:opacity-90"
            />
            <p className="text-[1em] z-50 relative bottom-12 mx-auto px-4 py-1 text-[1.3rem] rounded-xl text-center text-white table font-poppins border border-six">
              {prop.description}
            </p>
          </div>
        </div>
      </div>
      <div className="right flex md:justify-end mt-[5em]">
        <Socials
          social="flex sm:flex-col sm:fixed"
          icon="mr-6 sm:mr-0 transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 py-2 sm:p-2 sm:mb-6"
        />
      </div>
    </div>
  </div>
);

export default Hero;
