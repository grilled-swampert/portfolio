import { LineShadowText } from "../ui/line-shadow-text";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";

const Landing = () => {
  function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center"
      id="landing"
    >
      {/* Version Info */}
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
        )}
      />
      <div
        className="absolute top-0 left-0 m-4 "
        style={{ fontFamily: "afacad-regular" }}
      >
        <p className="ml-2">Version 1.0.2</p>
        <Terminal className="hidden md:block">
          <TypingAnimation className="text-white">
            &gt; version 1.0.3 patches
          </TypingAnimation>

          <AnimatedSpan delay={1500} className="text-white">
            <span>✘ Project Section under renovation.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-white">
            <span>✘ Hackathon Section under development.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-white">
            <span>✘ Cover Letter being cooked.</span>
          </AnimatedSpan>

          <TypingAnimation delay={5000} className="text-lime-500">
            The next update isn't that far.
          </TypingAnimation>
        </Terminal>
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
          meow.
        </p>
        <button
          className="bg-black font-bold p-0 rounded-[5px] mt-5"
          style={{ fontFamily: "poppins-regular" }}
        >
          <a
            href="mailto:s.ranadive@somaiya.edu"
            className="block bg-black text-white py-6 px-8 border border-black rounded-[5px] transform -translate-x-1 -translate-y-1 transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] hover:-translate-x-2 hover:-translate-y-2"
          >
            Contact Me
          </a>
        </button>
      </div>

      <div
        className="absolute text-2xl text-center mt-3 md:right-8 top-2/3 md:top-1/2 transform md:-translate-y-1/2 space-y-4 "
        style={{ fontFamily: "poppins-bold" }}
      >
        <div className="flex flex-col">
          {" "}
          <a
            href="https://drive.google.com/file/d/1qDlNYUZemlJ14xzvsMV6o50owCtv2umL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-black group"
          >
            RESUME
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <p className="relative inline-block text-black group mt-2">
            COVER LETTER
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </p>
          <a
            href="https://github.com/grilled-swampert"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-black group mt-2"
          >
            GITHUB
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/swapnil-ranadive-65b260342/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-black group mt-2"
          >
            LINKEDIN
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

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
