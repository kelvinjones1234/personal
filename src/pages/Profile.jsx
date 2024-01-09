import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/ProfileHero";

const Profile = () => {
  return (
    <div className="bg-background-image min-h-screen bg-center w-full bg-cover lg:px-[4em]">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default Profile;
