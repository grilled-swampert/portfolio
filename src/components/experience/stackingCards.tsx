import { useEffect } from "react";

const Card = ({
  title,
  time,
  place,
  content,
  image,
  index,
  bgColor,
}: {
  title: string;
  time: string;
  place: string;
  content: string;
  image: string;
  index: number;
  bgColor: string;
}) => {
  return (
    <li
      className="card sticky top-0 h-[50vh] shadow-2xl"
      style={{ "--index": `${index}` } as React.CSSProperties}
    >
      <div
        className="shadow-lg drop-shadow-xl h-full text-gray-900 rounded-2xl overflow-hidden grid grid-cols-2 p-6 transform transition-transform duration-500"
        style={{ backgroundColor: bgColor, fontFamily: "poppins-regular" }}
      >
        <div className="width-full flex flex-row col-span-2 justify-between align-middle">
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "poppins-bold" }}
          >
            {title}
          </h2>
          <h2
            className="text-2xl text-right"
            style={{ fontFamily: "poppins-bold" }}
          >
            {time}
          </h2>
        </div>
        <div
          className="col-span-2 text-left text-1xl"
          style={{ fontFamily: "poppins-bold" }}
        >
          {place}
        </div>
        <div className="col-span-1 text-left font-medium" style={{ fontFamily: "afacad-regular"}}>
          {content.split(". ").map((sentence, i) => (
            <p key={i} className="mt-2">
              → {sentence}
            </p>
          ))}
        </div>

        <figure>
          <img
            className="w-full object-cover rounded-md"
            src={image}
            alt={title}
          />
        </figure>
      </div>
    </li>
  );
};

const StackingCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.setAttribute("style", `--index: ${index}; top: ${index * 10}vh;`);
    });
  }, []);

  const cards = [
    {
      title: "Machine Learning Intern",
      time: "Jan 2025 - present",
      place: "KJSSE",
      content:
        "Implemented image processing techniques using Python and OpenCV for skin extraction, cleaning, and hair removal. Currently building a deep learning model with TensorFlow to classify healthy versus unhealthy skin.",
      image: "images/robot.png",
    },
    {
      title: "Full Stack Developer Intern",
      time: "July 2024 - Jan 2025",
      place: "KJSSE",
      content:
        "Led a team of 4 and built two MERN stack applications to optimize student course allotment processes. Implemented complete backend logic—including API development and database integration—and integrated it seamlessly with a responsive frontend built with React. Implemented Firebase Authentication to provide authorised access to the user and established Role Based Authentication. Developed coordinated cross-functional workflows using Git to ensure smooth testing and deployment.",
      image: "images/relaxing.png",
    },
    {
      title: "FOSSEE Summer Fellowship",
      time: "March 2024 - July 2024",
      place: "OpenFOAM Team, IIT Bombay",
      content:
        "Developed a Python-based Blender add-on that automated polyline generation from CAD models by extracting edge vertices and converting them into continuous splines. Leveraged Blender’s Python API to identify selected edges, merge contiguous segments, and create precise curve representations. Utilized Blender’s native curve functions to refine, visualize, and dynamically update polylines directly in the viewport. Integrated as a user-friendly operator within Blender, streamlining the transition from CAD data to OpenFOAM dictionary generation. Executed as part of the FOSSEE OpenFOAM GUI project, enhancing CAD model preparation and automation.",
      image: "images/cat-muffs.png",
    },
  ];

  const cardColors = ["#52796F", "#CBC5EA", "#9381FF"];

  return (
    <div className="text-beige text-center pb-40" id="hell">
      <main className="w-4/5 mx-auto ">
        <ul id="cards" className="grid grid-cols-1 gap-10 pb-20 mb-10 mt-10">
          <p
            className="text-6xl font-bold text-black mb-7 pt-[10rem] flex justify-center"
            style={{ fontFamily: "afacad-bold" }}
          >
            EXPERIENCE
          </p>
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index + 1}
              bgColor={cardColors[index % cardColors.length]}
              {...card}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
