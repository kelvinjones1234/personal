import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = ({ styles, icon }) => (
  <footer className={`${styles}`}>
    <nav className="">
      <div className="logo font-bold text-gray-300 text-[1.5em] text-[.8em] flex">
        <Link to="/">
          M<span className="text-[2rem] text-one">4</span>M
        </Link>
      </div>
      <ul className={`list-none flex items-center mb-7 pt-4`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[.8rem] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-5"
            }  text-white hover:text-one transition ease-in-out`}
          >
            <Link className="" to={`/${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
