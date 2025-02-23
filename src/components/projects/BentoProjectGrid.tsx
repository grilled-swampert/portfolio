import React, { useEffect } from "react";

const projects = [
  {
    name: "Grocery App",
    stack: "React, Node.js, MongoDB",
    description: "A simple grocery delivery app with real-time tracking.",
    image: "images/coming-soon.png",
  },
  {
    name: "AI Robot Assistant",
    stack: "Python, OpenAI API, Flask",
    description: "An AI-powered chatbot and assistant for automation.",
    image: "images/coming-soon.png",
  },
  {
    name: "Plant Care",
    stack: "Flutter, Firebase",
    description: "An app that helps users track plant care schedules.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 1",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 2",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 3",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 4",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 5",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 6",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 7",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
  {
    name: "Cat Muffs 8",
    stack: "Next.js, Tailwind CSS",
    description: "A cozy ecommerce store for cat accessories.",
    image: "images/coming-soon.png",
  },
];

const BentoProjectGrid = () => {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky")];

    const transform = (section) => {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector(".scroll_section");

      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 900 ? 900 : percentage;
      scrollSection.style.transform = `translate3D(${-percentage}vw, 0, 0)`;
    };

    const handleScroll = () => {
      stickySections.forEach((section) => transform(section));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full h-full bg-black">
      <p
        className="text-6xl font-bold text-white mb-7 pt-[10rem] flex justify-center"
        style={{ fontFamily: "afacad-bold" }}
      >
        PROJECTS
      </p>

      <div className="sticky_parent h-[1000vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="scroll_section absolute top-0 h-full w-[1000vw] will-change-transform flex justify-between items-center px-[5vw]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[100vw] flex flex-col justify-center items-center text-center text-white"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className=" h-[400px] rounded-xl shadow-lg mb-4"
                />
                <h2 className="text-4xl font-bold">{project.name}</h2>
                <p className="text-lg text-gray-300">{project.stack}</p>
                <p className="mt-2 w-3/4">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="h-full">
        <div className="container p-20 text-center">
          <h1 className="text-6xl font-light mb-4">Is this working?</h1>
          <p className="w-1/2 mx-auto my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
            nihil beatae qui dicta necessitatibus officia repudiandae mollitia
            aliquam! Molestias aliquam quos est nam, perferendis ullam iusto
            earum aut voluptates.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BentoProjectGrid;
