import React from "react";
import Socials from "./Socials";
import img2 from "../assets/images/2.jpg";
import img1 from "../assets/images/1.jpg";
import img3 from "../assets/images/3.jpg";

const Hero = ({ props }) => {
  return (
    <div className="mt-[4.5rem] ss:mt-[7rem] mx-6 sm:mx-[4em] xl:mx-0">
      <div className="content-container flex flex-col sm:flex-row lg:gap-[3em] gap-[2em]">
        <div className="right items-end flex md:justify-end sm:mt-[5em] mt-0 order-3 max-w-[1000px]">
          <Socials
            social="flex sm:flex-col sm:fixed bottom-0 sm:mb-[4em]"
            icon="mr-6 sm:mr-0 transition ease-out delay-100 hover:-translate-y-1 hover:scale-105 py-2 sm:p-2 sm:mb-6"
          />
        </div>
        <div className="content h-auto flex flex-col flex-[80%] max-w-auto max-w-[757px]">
          <div className="">
            <img
              src={img3}
              alt=""
              className="xs:w-[200px] sm:w-[320px] rounded-2xl cover fit float-left mr-[1em]"
            />

            <div className="">
              <div className="text text-white font-poppins text-[1rem] leading-[2] rounded-2xl p-[1em] font-light bg-black">
                <div className="title-box my-3 text-center text-six leading-[1.5] m-[1em]">
                  Surviving with so much going on around you. How?
                </div>
                <div className="body pt-4 border-t">
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
                  itaque et quas? Eum, commodi ipsam recusandae beatae deleniti
                  dolore sequi voluptate maiores sapiente, corporis sint,
                  provident expedita saepe. Nobis?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="other-posts sm:flex-1 flex-[150px] md:flex gap-[1em]">
          <div className="recent-post">
            <h1 className="text-center py-[.3em] text-[.8rem] text-poppins px-[1em] mb-[1.5em] table bg-one mx-auto rounded-xl items-center">
              Recent {props.recent}
            </h1>
            <div className="cards-container lg:columns-1 gap-[1.5em]">
              <div className="cards flex flex-wrap sm:flex-col rounded-2xl gap-[1em]">
                <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                  <img
                    src={img2}
                    alt=""
                    className="rounded-xl cover fit hover:opacity-90"
                  />
                  <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                    Addictions
                  </p>
                </div>
                <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-xl cover fit hover:opacity-90"
                  />
                  <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                    Addictions
                  </p>
                </div>

                <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-xl cover fit hover:opacity-90"
                  />
                  <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                    Addictions
                  </p>
                </div>
                <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-xl cover fit hover:opacity-90"
                  />
                  <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                    Addictions
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="m-auto">
            <h1 className="text-center py-[.3em] text-[.8rem] text-poppins px-[1em] mb-[1.5em] table bg-one mx-auto rounded-xl items-center">
              Related {props.related}
            </h1>
            <div className="related-post flex sm:flex-col flex-wrap gap-[1em]">
              <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                <img
                  src={img2}
                  alt=""
                  className="rounded-xl cover fit hover:opacity-90"
                />
                <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                  Addictions
                </p>
              </div>
              <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                <img
                  src={img2}
                  alt=""
                  className="rounded-xl cover fit hover:opacity-90"
                />
                <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                  Addictions
                </p>
              </div>
              <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                <img
                  src={img2}
                  alt=""
                  className="rounded-xl cover fit hover:opacity-90"
                />
                <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                  Addictions
                </p>
              </div>
              <div className="card break-inside-avoid transition w-[130px] ease-out delay-100 hover:-translate-y-1 hover:scale-105 duration-500">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-xl cover fit hover:opacity-90"
                  />
                  <p className="text-[.8rem] relative bottom-12 mx-auto px-4 py-1 text-[.8rem] rounded-xl text-center text-white table font-poppins border border-six">
                    Addictions
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
