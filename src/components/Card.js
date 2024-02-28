import React, { useState } from "react";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div onClick={flipCard} className="flashcard">
      <div className={isFlipped ? "card flipped" : "card"}>
        <div className="deck card-front">{card.question}</div>
        <div className="deck card-back">{card.answer}</div>
      </div>
    </div>
  );
};

export default Card;
