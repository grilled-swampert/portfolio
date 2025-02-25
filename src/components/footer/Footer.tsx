import { VelocityScroll } from "../ui/scroll-based-velocity";
import { ReactNode } from "react";
import '@lottiefiles/lottie-player';

const HoverUnderline = ({ children, className = "", ...rest }: { children: ReactNode, className?: string }) => (
  <div className={`relative inline-block group ${className}`} {...rest}>
    {children}
    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </div>
);

const Footer = () => {
  return (
    <div
      className="bg-black w-full h-[100vh] flex flex-col items-center justify-center"
      id="footer"
    >
      <div className="w-full h-[50px] flex items-center justify-center">

      </div>
      <div className="h-[400px] w-full flex items-center justify-center overflow-hidden">
        <VelocityScroll
          className="text-white text-[12rem] top-[0rem] z-0"
          style={{ fontFamily: "afacad-bold" }}
          numRows={1}
          defaultVelocity={2}
        >
          WHEN DID IT EVER GET TO BE SO LOUD?
        </VelocityScroll>
      </div>
      <div
        className="w-full flex flex-col gap-8 overflow-hidden text-center md:text-left text-3xl text-white"
        style={{ fontFamily: "quattrocento-regular" }}
      >
        <a
          href="https://drive.google.com/file/d/1qDlNYUZemlJ14xzvsMV6o50owCtv2umL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="md:mx-40"
        >
          <HoverUnderline>RESUME</HoverUnderline>
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="md:mx-40"
        >
          <HoverUnderline>COVER LETTER</HoverUnderline>
        </a>        <a
          href="https://github.com/grilled-swampert"
          target="_blank"
          rel="noopener noreferrer"
          className="md:mx-40 mt-2"
        >
          <HoverUnderline>GITHUB</HoverUnderline>
        </a>
        <a
          href="https://www.linkedin.com/in/swapnil-ranadive-65b260342/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:mx-40 mt-2"
        >
          <HoverUnderline>LINKEDIN</HoverUnderline>
        </a>
      </div>
      <a
        href="#landing"
        className="fixed bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <img
          src="/images/up-arrow.png"
          alt="Scroll to top"
        />
      </a>
    </div>
  );
};

export default Footer;
