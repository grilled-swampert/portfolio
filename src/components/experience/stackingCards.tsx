import React, { useEffect } from "react";

const Card = ({ title, content, image, index, className }) => {
  return (
    <li className="card sticky top-0 h-[70vh]" style={{ "--index": index }}>
      <div className="shadow-lg h-full text-gray-900 rounded-2xl overflow-hidden grid grid-cols-2 p-6 transform transition-transform duration-500" style={className}>
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
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const offset = Math.max(0, 1 - rect.top / window.innerHeight);
        card.style.transform = `translateY(${
          index * 30 + offset * index * 10
        }px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      title: "Card One",
      content:
        "This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Card Two",
      content:
        "This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Card Three",
      content:
        "This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="text-beige text-center pb-40">
      <p
        className="text-6xl font-bold text-black mb-7 pt-[10rem] flex justify-center"
        style={{ fontFamily: "afacad-bold" }}
      >
        EXPERIENCE
      </p>
      <main className="w-4/5 mx-auto">
        <ul id="cards" className="grid grid-cols-1 gap-10 pb-20 mb-10 mt-10">
          {cards.map((card, index) => (
            <Card key={index} index={index + 1} {...card} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
