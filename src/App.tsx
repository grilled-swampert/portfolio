import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import BentoProjectGrid from "./components/projects/BentoProjectGrid";
import StackingCards from "./components/experience/stackingCards";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const enterButtonRef = useRef(null);
  const enterBackgroundRef = useRef(null);
  const circlesRef = useRef(null);
  const circleTextRefs = useRef([]);

  // This function runs when the user clicks anywhere on the page.
  // You might want to restrict this to only the button click if that fits your design.
  const handleClick = () => {
    enterHoleAnimation();
  };

  // The "hole" animation timeline
  const enterHoleAnimation = () => {
    // Create a timeline that will animate the various elements.
    const tl = gsap.timeline({
      onComplete: () => {
        // When the animation is done, reveal the main content.
        setIsLoaded(true);
      },
    });

    // Animate the background: scale up and fade out to simulate zooming into a hole.
    tl.to(
      enterBackgroundRef.current,
      {
        duration: 1.5,
        ease: "power2.in",
        scale: 3,
        opacity: 0,
      },
      0
    );

    // Animate the circles SVG to scale down and fade out simultaneously.
    tl.to(
      circlesRef.current,
      {
        duration: 1.5,
        ease: "power2.in",
        scale: 5,
        opacity: 0,
      },
      0
    );

    // Optionally animate the button itself, fading it out.
    tl.to(
      enterButtonRef.current,
      {
        duration: 1.5,
        ease: "power2.out",
        opacity: 5,
      },
      0
    );
  };

  useEffect(() => {
    // Attach the click event listener to the window if you want to trigger on click anywhere.
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Your hover animations for the Enter button remain the same (or adjust as needed)
  useEffect(() => {
    const enterMouseHover = () => {
      gsap.to(circleTextRefs.current, {
        duration: 1,
        ease: "power2.out",
        scale: 0.4,
        opacity: 1,
      });
      gsap.to(circlesRef.current, {
        duration: 1,
        ease: "power2.out",
        scale: 0.4,
      });
      circleTextRefs.current.forEach((text, index) => {
        gsap.to(text, {
          duration: 1,
          ease: "power3.out",
          rotation: "+=180",
          stagger: 0.1 * index,
          transformBox: "fill-box",
          transformOrigin: "center center",
        });
      });
      gsap.to(enterBackgroundRef.current, {
        duration: 1,
        ease: "expo.out",
        scale: 1.4,
      });
    };

    const enterMouseLeave = () => {
      gsap.to(circleTextRefs.current, {
        duration: 1.5,
        ease: "elastic.out(1, 0.4)",
        scale: 1,
        opacity: 1,
      });
      gsap.to(circlesRef.current, {
        duration: 1.5,
        ease: "elastic.out(1, 0.4)",
        scale: 1,
      });
      circleTextRefs.current.forEach((text, index) => {
        gsap.to(text, {
          duration: 1.5,
          ease: "elastic.out(1, 0.4)",
          rotation: "-=180",
          stagger: 0.1 * index,
          transformBox: "fill-box",
          transformOrigin: "center center",
        });
      });
      gsap.to(enterBackgroundRef.current, {
        duration: 2,
        ease: "elastic.out(1, 0.4)",
        scale: 1,
      });
    };

    if (enterButtonRef.current) {
      enterButtonRef.current.addEventListener("mouseenter", enterMouseHover);
      enterButtonRef.current.addEventListener("mouseleave", enterMouseLeave);
    }

    return () => {
      if (enterButtonRef.current) {
        enterButtonRef.current.removeEventListener(
          "mouseenter",
          enterMouseHover
        );
        enterButtonRef.current.removeEventListener(
          "mouseleave",
          enterMouseLeave
        );
      }
    };
  }, []);

  return (
    <>
      {!isLoaded ? (
        <>
          <svg
            ref={circlesRef}
            className="pointer-events-none fixed w-[206vmin] h-[206vmin] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 antialiased"
            style={{ fontFamily: "quattrocento-regular" }}
            width="100%"
            height="100%"
            viewBox="0 0 1400 1400"
          >
            <defs>
              <path
                id="circle-1"
                d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
              />
              <path
                id="circle-2"
                d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
              />
              <path
                id="circle-3"
                d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
              />
              <path
                id="circle-4"
                d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
              />
            </defs>
            <text
              className="uppercase origin-[700px_700px] will-change-transform opacity-100 text-[28vmin]"
            >
              <textPath
                ref={(el) => (circleTextRefs.current[0] = el)}
                xlinkHref="#circle-1"
              >
                MARTYRDOM WEATHER &nbsp;
              </textPath>
            </text>
            <text className="uppercase origin-[700px_700px] text-[17vmin]">
              <textPath
                ref={(el) => (circleTextRefs.current[1] = el)}
                xlinkHref="#circle-2"
              >
                WEAPONSIZE THE TIMELINE &nbsp;
              </textPath>
            </text>
            <text className="uppercase origin-[700px_700px] text-[8.3vmin]">
              <textPath
                ref={(el) => (circleTextRefs.current[2] = el)}
                xlinkHref="#circle-3"
              >
                BLURRING THROUGH THESE MOTIONS &nbsp;
              </textPath>
            </text>
            <text className="uppercase origin-[700px_700px] text-[11vmin]">
              <textPath
                ref={(el) => (circleTextRefs.current[3] = el)}
                xlinkHref="#circle-4"
              >
                I LOST ALL FOCUS &nbsp;
              </textPath>
            </text>
          </svg>
          <button
            className="block border-0 w-[90px] h-[90px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            ref={enterButtonRef}
            // Instead of directly handling click here, let our window click listener call the animation
          >
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-[#d6ae7c]"
              ref={enterBackgroundRef}
            ></div>
            <span className="relative">ENTER</span>
          </button>
        </>
      ) : (
        <div className="w-full flex flex-col items-center">
          <Landing />
          <BentoProjectGrid />
          <StackingCards />
          {/* <Hackathons /> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
