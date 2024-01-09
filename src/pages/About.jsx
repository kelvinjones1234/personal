import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/SinglepostHeroPreview";
import Footer from "../components/Footer";
import img3 from "../assets/images/3.jpg";
import Socials from "../components/Socials";

const About = () => {
  return (
    <div className="bg-background-image bg-center w-full bg-cover lg:px-[4em]">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="about-content mt-[4.5rem] ss:mt-[7rem] mx-6 sm:mx-[4em] lg:ml-[4rem] xl:mx-0 md:flex">
        <div className="md:flex gap-5">
          <div className="right flex-[80%]">
            <div className="">
              <img
                src={img3}
                alt=""
                className="xs:w-[200px] w-[200px] sm:w-[320px] rounded-2xl cover fit float-left mr-[1em]"
              />

              <div className="text text-white font-poppins text-[1rem] leading-[2] rounded-2xl p-[1em] font-light bg-black mb-[4em] min-h-[373px]">
                <div className="title-box my-3 text-center text-six leading-[1.5] m-[1em]">
                  About the team
                </div>
                <div className="body pb-6 pt-4 border-t">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ratione velit deserunt maxime tempora ad quod hic
                  reprehenderit, dolore nam debitis consectetur quo harum
                  corrupti neque facilis, deleniti numquam autem unde, explicabo
                  quidem distinctio animi vel. Maiores labore maxime vel ipsum
                  cupiditate officiis, et hic facilis assumenda qui voluptate
                  nobis quidem at mollitia explicabo praesentium debitis, quam
                  asperiores pariatur repudiandae illo ea! Quos saepe, dolores
                  exercitationem modi ad maiores enim iste, corrupti natus
                  veritatis maxime inventore libero sequi explicabo cumque
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Socials
              social="flex md:flex-col md:fixed"
              icon="mr-6 sm:mr-0 transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 py-2 sm:p-2 sm:mb-6"
            />
          </div>
        </div>
      </div>

      <div className="sm:px-16 px-6">
        <Footer styles="sm:flex-col bottom-nav w-full flex justify-between text-white" />
      </div>
    </div>
  );
};

export default About;
