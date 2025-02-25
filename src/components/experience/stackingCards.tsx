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
      className="card sticky top-0 h-[70vh] shadow-2xl"
      style={{ "--index": `${index}` } as React.CSSProperties}
    >
      <div
        className="shadow-lg drop-shadow-xl h-full text-gray-900 rounded-2xl overflow-hidden grid grid-cols-2 p-6 transform transition-transform duration-500"
        style={{ backgroundColor: bgColor }}
      >
        <div className="width-full flex flex-row col-span-2 justify-between align-middle">
          <h2 className="text-4xl font-serif font-bold">{title}</h2>
          <h2 className="text-right">{time}</h2>
        </div>
        <div>
          {content}
          {place}
        </div>
        <figure>
          <img
            className="w-full h-full object-cover rounded-md"
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
        "This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "images/plants.png",
    },
    {
      title: "Full Stack Developer Intern",
      time: "July 2024 - Jan 2025",
      place: "KJSSE",
      content:
        "This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "images/relaxing.png",
    },
    {
      title: "FOSSEE Summer Fellowship",
      time: "March 2024 - July 2024",
      place: "KJSSE",
      content:
        "This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
