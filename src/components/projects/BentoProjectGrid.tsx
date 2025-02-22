import React, { useEffect } from "react";

const BentoProjectGrid = () => {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky")];
    const images = [
      "/images/groceries.png",
      "/images/robot.png",
      "/images/plants.png",
      "/images/cat-muffs.png",
    ];

    images.forEach((img) => {
      stickySections.forEach((section) => {
        let image = document.createElement("img");
        image.src = img;
        section.querySelector(".scroll_section").appendChild(image);
      });
    });

    const transform = (section) => {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector(".scroll_section");

      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 900 ? 900 : percentage;
      scrollSection.style.transform = `translate3D(${-percentage}vw, 0, 0)`;
    };

    const handleScroll = () => {
      for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full h-full bg-black ">
      <p
        className="text-6xl font-bold text-white mb-7 pt-[10rem]"
        style={{ fontFamily: "afacad-bold" }}
      >
        PROJECTS
      </p>

      <div className="sticky_parent h-[500vh]">
        <div className="sticky top-0 h-screen border border-red-500 overflow-hidden">
          <div className="scroll_section absolute top-0 h-full w-[500vw] will-change-transform flex justify-between items-center px-[5vw]"></div>
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
