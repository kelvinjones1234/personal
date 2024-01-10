import React, { useState } from "react";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";

import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex items-center text-white navbar">
      <div className="logo font-bold text-gray-300 text-[1.5em] text-[.8em]">
        <Link to="/">
          M<span className="text-[2rem] text-one">4</span>M
        </Link>
      </div>
      <ul className="list-none sm:flex hidden justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  text-white hover:text-one transition ease-in-out active:text-one`}
          >
            <Link className="" to={`/${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } z-[1] p-6 bg-black-gradient absolute top-20 right-0 mr-4 my-1 min-w-[140px] rounded-xl sidebar transparent`}
        >
          <ul className="list-none flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-3 text-center text-second hover:text-one`}
              >
                <Link className="" to={`/${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
