import React from "react";
import StackingCards from "./stackingCards";

const Experience = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      id="experience"
    >
      <p
        className="text-6xl font-bold text-black"
        style={{ fontFamily: "afacad-bold" }}
      >
        EXPERIENCE
      </p>
      <StackingCards />
    </div>
  );
};

export default Experience;
