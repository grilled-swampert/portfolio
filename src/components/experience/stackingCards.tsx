import { useEffect } from "react";

const Card = ({
  title,
  content,
  image,
  index,
  bgColor,
}: {
  title: string;
  content: string;
  image: string;
  index: number;
  bgColor: string;
}) => {
  return (
    <li
      className="card sticky top-0 h-[70vh] shadow-2xl"
      style={{ "--index": index }}
    >
      <div
        className="shadow-lg drop-shadow-xl h-full text-gray-900 rounded-2xl overflow-hidden grid grid-cols-2 p-6 transform transition-transform duration-500"
        style={{ backgroundColor: bgColor }}
      >
        <div className="space-y-4 text-left">
          <h2 className="text-4xl font-serif font-bold">{title}</h2>
          <p className="text-lg">{content}</p>
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
    const handleScroll = () => {
      const cards = document.querySelectorAll(".cards");
      cards.forEach((card, index) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const center = window.innerHeight / 2;
        // Only apply additional stacking once the card's top is above the center.
        const offset =
          rect.top < center ? Math.min(1, (center - rect.top) / center) : 0;
        (card as HTMLElement).style.transform = `translateY(${
          index * 30 + offset * index * 10
        }px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Call it once on mount to set initial positions
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      title: "Card One",
      content:
        "This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "images/plants.png",
    },
    {
      title: "Card Two",
      content:
        "This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "images/relaxing.png",
    },
    {
      title: "Card Three",
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
