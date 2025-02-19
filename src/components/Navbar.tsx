import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import lettuceicon from "../assets/lettuce-icon.svg";
import {
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 md:row-end-4 md:col-start-2 md:col-end-4 bg-white text-black",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 bg-[#D0FFB3] border-4xl",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4 bg-[#D0FFB3] border-4xl",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-2 bg-[#D0FFB3] border-4xl",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.to(iconRef.current, {
        rotate: 180,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <nav className="bg-black z-1000 w-[40vw] text-5xl text-white flex items-center justify-between p-4 rounded-full shadow-md">
        <div className="flex items-center">
          <img
            src={lettuceicon}
            alt="Lettuce logo"
            className="h-10 w-10 rounded-full"
          />
          <span
            className="ml-2 text-3xl tracking-wide"
            style={{ fontFamily: "poppins-regular" }}
          >
            crisplettuce
          </span>
        </div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <div
            ref={iconRef}
            className="flex items-center justify-center h-10 w-20"
          >
            {isOpen ? (
              <X className="h-10 w-10" />
            ) : (
              <Menu className="h-10 w-10" />
            )}
          </div>
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`absolute top-full mt-2 bg-black text-white p-4 rounded-4xl shadow-lg w-[40vw] h-[50vh] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <BentoGrid className="lg:grid-rows-3 p-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Navbar;
