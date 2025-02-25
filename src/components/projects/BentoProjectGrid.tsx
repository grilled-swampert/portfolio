import { useEffect } from "react";
import { Lens } from "../ui/lens";
import { MagicCard } from "../ui/magic-card";

const projects = [
  {
    name: "GNSS Map Matching and Road Identification",
    stack: "Python, OSMR, React, GIS",
    description:
      "A tool that processes GNSS data to accurately match and identify road networks for improved navigation.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Financial Investment Report Generator",
    stack: "Python, OpenAI API, Flask, React",
    description:
      "A web application that leverages AI to generate detailed financial investment reports and actionable insights.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Social Media Advisor",
    stack: "Python, OpenAI API, Flask, React",
    description:
      "A mobile app that offers personalized social media strategy tips and content optimization advice.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "NLP Extractor",
    stack: "Python, SpaCy, Flask",
    description:
      "An application that uses natural language processing to extract key information and insights from text data.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "OE Allotment Application",
    stack: "React, Node.js, MongoDB",
    description:
      "A web solution designed to manage and automate the allotment of office equipment and resources.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "H&M Alloment Application",
    stack: "React, Node.js, MongoDB",
    description:
      "An application tailored to streamline the resource allotment process for H&M, enhancing operational efficiency.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Blockchain Setup",
    stack: "Golang, React",
    description:
      "A project focused on configuring and deploying a blockchain network to facilitate secure, transparent transactions.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Chat Application",
    stack: "React, Socket.io, Golang",
    description:
      "A real-time messaging platform enabling instant chat and group conversations with robust scalability.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Tableau StoryBoard",
    stack: "Tableau, Python, Flask",
    description:
      "An interactive dashboard application that combines powerful Tableau visualizations with dynamic storytelling.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Memory Game",
    stack: "JavaScript, HTML, CSS",
    description:
      "A fun, interactive browser game that challenges users to match pairs of cards to boost memory and concentration.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
  {
    name: "Weather Application using API",
    stack: "React, OpenWeatherMap API, CSS",
    description:
      "A dynamic weather forecasting app that retrieves real-time data from public APIs and displays it in an intuitive interface.",
    deployedLink: "",
    githubLink: "",
    image: "images/coming-soon.png",
    status: "",
  },
];

const BentoProjectGrid = () => {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky")];
    // @ts-expect-error: Parameter 'section' implicitly has an 'any' type.
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
                className="w-[100vw] flex flex-col md:flex-row justify-center items-center text-center text-white"
              >
                <Lens
                  zoomFactor={2}
                  lensSize={150}
                  isStatic={false}
                  ariaLabel="Zoom Area"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="p-10 md:h-[300px] lg:h-[400px] rounded-xl shadow-lg mb-4"
                  />
                </Lens>
                <div className="w-[30vw] ml-5 flex justify-center flex-col items-center">
                  <h2
                    className="text-4xl font-bold"
                    style={{ fontFamily: "quattrocento-regular" }}
                  >
                    {project.name}
                  </h2>
                  <div className="flex md:flex-wrap gap-2 mt-2 justify-center items-center">
                    {project.stack.split(", ").map((tech, idx) => (
                      <div
                        key={idx}
                        className="text-md text-gray-300"
                        style={{ fontFamily: "quattrocento-regular" }}
                      >
                        <MagicCard
                          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap p-3"
                          gradientColor={"#D9D9D955"}
                        >
                          {tech}
                        </MagicCard>
                      </div>
                    ))}
                  </div>
                  <div
                    className=" mt-2 md:w-3/4 "
                    style={{ fontFamily: "afacad-regular" }}
                  >
                    {project.description}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="h-full flex justify-center">
        <div className="container w-full p-20 text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-light mb-4"
            style={{ fontFamily: "afacad-bold" }}
          >
            More in Development.
          </h1>
          <p
            className="md:text-1xl"
            style={{ fontFamily: "poppins-regular" }}
          >
            We build our own prisons. Bars forged of oaths, codes, commitments.
            Walls of self-doubt and accepted limitation. We inhabit these cells,
            these identities, and call them "us."
          </p>
        </div>
      </section>
    </main>
  );
};

export default BentoProjectGrid;
