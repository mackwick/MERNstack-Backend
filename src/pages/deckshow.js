import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Deckshow = () => {
  const deck = useLoaderData();
  const navigate = useNavigate();
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Function to toggle study mode
  const toggleStudyMode = () => {
    setStudyMode(!studyMode);
    setCurrentCardIndex(0); // Reset to the first card when entering study mode
  };

  // Navigation functions
  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, deck.cards.length - 1)
    );
  };

  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.cards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="basic-mode">
      <h1>{deck.name}</h1>
      {studyMode ? (
        <>
          <Card
            key={deck.cards[currentCardIndex]._id}
            card={deck.cards[currentCardIndex]}
          />
          <div className="navigation">
            <button onClick={showPreviousCard}>Previous</button>
            <button onClick={showRandomCard}>Random</button>
            <button onClick={showNextCard}>Next</button>
          </div>
        </>
      ) : (
        <div className="cards-container">
          {deck.cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </div>
      )}
      <button onClick={() => navigate(-1)}>Back to Decks</button>
      <button onClick={toggleStudyMode}>
        {studyMode ? "Exit Study Mode" : "Study Mode"}
      </button>
    </div>
  );
};

export default Deckshow;
