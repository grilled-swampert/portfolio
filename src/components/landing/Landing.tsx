import { ShimmerButton } from "../ui/shimmer-button";
import { LineShadowText } from "../ui/line-shadow-text";

const Landing = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Version Info */}
      <div
        className="absolute top-0 left-0 m-4"
        style={{ fontFamily: "afacad-regular" }}
      >
        Version 1.1
      </div>

      {/* Main Header */}
      <h1
        className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ fontFamily: "poppins-bold" }}
      >
        crisp
        <LineShadowText className="italic" shadowColor="black">
          lettuce
        </LineShadowText>
      </h1>

      {/* Who Am I Section */}
      <div className="mt-8 text-center max-w-xl px-4">
        <p className="text-lg">
          I'm a digital alchemist turning coffee into code and dreams into
          reality. I thrive on creative chaos and unconventional solutions.
        </p>
        <button
          className="bg-black font-bold p-0 rounded-[5px] mt-5"
          style={{ fontFamily: "poppins-regular" }}
        >
          <span className="block bg-black text-white py-6 px-8 border border-black rounded-[5px] transform -translate-x-1 -translate-y-1 transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] hover:-translate-x-2 hover:-translate-y-2">
            Contact Me
          </span>
        </button>
      </div>

      <div
        className="absolute text-2xl right-8 top-1/2 transform -translate-y-1/2 space-y-4"
        style={{ fontFamily: "poppins-bold" }}
      >
        <div className="flex flex-col">
          {" "}
          <a
            href="https://link1.com"
            className="relative inline-block text-black group"
          >
            RESUME
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://link2.com"
            className="relative inline-block text-black group mt-2"
          >
            COVER LETTER
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://link3.com"
            className="relative inline-block text-black group mt-2"
          >
            GITHUB
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://link4.com"
            className="relative inline-block text-black group mt-2"
          >
            LINKEDIN
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <span
          className="mt-2 text-sm text-gray-900 hover:underline"
          style={{ fontFamily: "poppins-regular" }}
        >
          Scroll Down
        </span>
      </div>
    </div>
  );
};

export default Landing;
