import React from "react";
import homebg from "../images/homebg.mp4";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home">
      <video
        src={homebg}
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover absolute z-[-1] bg-center bg-no-repeat"
      />
      <div className="w-full h-screen flex flex-col items-center justify-center font-serif px-10">
        <h2 className="md:text-3xl text-2xl text-red-700 font-bold mb-3">
          IT'S ALL ABOUT WHAT YOU CAN ACHIEVE
        </h2>
        <p className="md:text-xl text-sm text-red-700">
          Empower yourself to make the changes you need to make
        </p>
        <Link
          to="classes"
          smooth={true}
          duration={1000}
          className="bg-red-700 p-2 rounded mt-5 cursor-pointer hover:bg-red-900">
          <button className="text-xs font-bold">LET'S GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
