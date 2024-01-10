import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";


const Register = () => {
  return (
    <div className="bg-background-image bg-center h-screen fixed w-full bg-cover">
      <div className="bg-black/[.2] h-full">
        <div className="sm:px-16 px-6 flex justify-center lg:px-[8em] items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
        <div className="hero flex justify-center">
          <div className="xl:max-w-[1280px] w-full fixed">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
