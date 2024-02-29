import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const ManageCards = () => {
  const { id: deckId } = useParams();
  const location = useLocation();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      // Fetch the deck data, which includes the cards
      const response = await fetch(
        `${process.env.REACT_APP_URL}/deck/${deckId}`
      );
      if (response.ok) {
        const data = await response.json();
        setCards(data.cards); // Set cards from the deck's cards array
      } else {
        console.error("Failed to fetch deck with cards");
      }
    };
    fetchDeck();
  }, [deckId, location.state?.cardAdded]);

  return (
    <div>
      <div className="title-container">
        <h2>Manage Cards</h2>
      </div>
      <div className="cards-container">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div className="deck editCards" key={card._id}>
              <p>
                <b>Question: </b>
                {card.question}
              </p>
              <p>
                <b>Answer:</b> {card.answer}
              </p>
              <div className="landing-actions manage-links">
                <Link to={`/edit/card/${card.deckId}/${card._id}`}>Edit</Link>
                <pre>{" | "}</pre>
                <Link to={`/delete/card/${card.deckId}/${card._id}`}>
                  Delete
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No cards available. Add some!</p>
        )}
      </div>
      <Link to={`/create/card/${deckId}`}>Add New Card</Link>
    </div>
  );
};

export default ManageCards;
