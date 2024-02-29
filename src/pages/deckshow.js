import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Deckshow = () => {
  const deck = useLoaderData();
  const navigate = useNavigate();
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // Added for handling error messages

  // Function to toggle study mode
  const toggleStudyMode = () => {
    if (deck.cards.length === 0) { // Checking if the deck has no cards
      setErrorMessage("This deck is empty. Please add some cards."); // Error message
      return;
    }
    setErrorMessage(""); // Clear any previous error messages
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

  // Function to navigate to add cards
  const navigateToAddCards = () => {
    navigate(`/deck/${deck._id}/manage-cards`); // Adjust the route as necessary
  };

  return (
    <div className="show-container">
      <div className="title-container">
        <h1>{deck.name}</h1>
        <button onClick={() => navigate('/')}>Back to Decks</button>
        <button onClick={toggleStudyMode}>
          {studyMode ? "Exit Study Mode" : "Study Mode"}
        </button>
        {/* Display error message if there are no cards in the deck */}
        {errorMessage && (
          <>
            <p className="error-message">{errorMessage}</p>
            <button onClick={navigateToAddCards} className="add-cards-button">Add Cards</button>
          </>
        )}
      </div>
      {studyMode && deck.cards.length > 0 ? (
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
    </div>
  );
};

export default Deckshow;
