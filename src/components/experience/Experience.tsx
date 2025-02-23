import React from "react";
import StackingCards from "./stackingCards";

const Experience = () => {
  return (
    <div
      className="w-full h-screen"
      id="experience"
    >
      <p
        className="text-6xl font-bold text-white mb-7 pt-[10rem] flex justify-center"
        style={{ fontFamily: "afacad-bold" }}
      >
        EXPERIENCE
      </p>
      <StackingCards />
    </div>
  );
};

export default Experience;
