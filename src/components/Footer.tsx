import React from "react";
import { VelocityScroll } from "./ui/scroll-based-velocity";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="h-[400px] w-full flex items-center justify-center overflow-hidden">
        <VelocityScroll
          className="text-white text-[12rem] top-[0rem] z-0"
          style={{ fontFamily: "afacad-bold"}}
          numRows={1}
          defaultVelocity={2}
        >
          WHEN DID IT EVER GET TO BE SO LOUD?
        </VelocityScroll>
      </div>
      <div className="w-full flex flex-col gap-8 overflow-hidden text-3xl text-white" style={{ fontFamily: "quattrocento-regular"}}>
        <div className="mx-40">LINKEDLN</div>
        <div className="mx-40">GITHUB</div>
        <div className="mx-40">RESUME</div>
        <div className="mx-40">COVER LETTER</div>
      </div>
    </div>
  );
};

export default Footer;
