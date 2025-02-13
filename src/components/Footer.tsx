import React from "react";
import { VelocityScroll } from "./ui/scroll-based-velocity";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="h-[400px] w-full flex items-center justify-center">
        <VelocityScroll
          className="text-white text-[12rem] top-[0rem]"
          style={{ fontFamily: "afacad-bold"}}
          numRows={1}
          defaultVelocity={2}
        >
          WHEN DID IT EVER GET TO BE SO LOUD?
        </VelocityScroll>
      </div>
    </div>
  );
};

export default Footer;
