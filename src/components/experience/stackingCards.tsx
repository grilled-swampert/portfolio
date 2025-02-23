import React, { useEffect } from "react";

const Card = ({ title, content, image, index }) => {
  return (
    <li className="card sticky top-0" style={{ "--index": index }}>
      <div className="shadow-lg bg-gray-100 text-gray-900 rounded-2xl overflow-hidden grid grid-cols-2 p-6 transform transition-transform duration-500">
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
      image: "https://assets.codepen.io/210284/flower-9.jpg",
    },
    {
      title: "Card Two",
      content:
        "This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://assets.codepen.io/210284/flower-8.jpg",
    },
    {
      title: "Card Three",
      content:
        "This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://assets.codepen.io/210284/flower-7.jpg",
    },
    {
      title: "Card Four",
      content:
        "This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://assets.codepen.io/210284/flower-6.jpg",
    },
  ];

  return (
    <div className="text-beige text-center pb-40">
      <p
        className="text-6xl font-bold text-black"
        style={{ fontFamily: "afacad-bold" }}
      >
        EXPERIENCE
      </p>
      <main className="w-4/5 mx-auto">
        <ul id="cards" className="grid grid-cols-1 gap-10 pb-20 mb-10">
          {cards.map((card, index) => (
            <Card key={index} index={index + 1} {...card} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
