import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glyph from "../assets/gylph.mp4";

gsap.registerPlugin(ScrollTrigger);

const Warfare = () => {
  return (
    <div className="bg-black w-full min-h-[300vh] text-white flex flex-col items-center justify-center text-center space-y-32 pt-40">
      {/* Text Animation Section */}
      {/* <div className="space-y-4">
        <div ref={(el) => (textRefs.current[0] = el)} style={{ fontFamily: "afacad-bold" }} className="text-5xl">
          I LOST ALL FOCUS
        </div>
        <div ref={(el) => (textRefs.current[1] = el)} style={{ fontFamily: "dynapuff-regular" }} className="text-8xl font-bold tracking-wider">
          BLURRING
        </div>
        <div ref={(el) => (textRefs.current[2] = el)} style={{ fontFamily: "afacad-bold" }} className="text-5xl">
          THROUGH THESE MOTIONS
        </div>
      </div>

      <div className="space-y-4 mt-16">
        <div ref={(el) => (textRefs.current[3] = el)} style={{ fontFamily: "poppins-bold" }} className="text-7xl">
          YOU DON'T GIVE A F*CK SINCE
        </div>
        <div ref={(el) => (textRefs.current[4] = el)} style={{ fontFamily: "afacad-bold" }} className="text-6xl">
          DISTANCE TURNED TO
        </div>
        <div ref={(el) => (textRefs.current[5] = el)} style={{ fontFamily: "afacad-regular" }} className="text-6xl bg-gray-200 text-black rounded-full px-12 py-2 inline-block">
          OCEANS
        </div>
      </div> */}

      {/* Video Section */}
      <div className="relative w-full flex justify-center items-center h-[80vh]">
        <video
          className="w-3/4 h-auto rounded-lg shadow-lg"
          src={Glyph}
          muted
          loop={true}
          autoPlay
          playsInline

        />
      </div>
    </div>
  );
};

export default Warfare;
