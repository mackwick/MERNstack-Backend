import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const ManageCards = () => {
  const { id: deckId } = useParams();
  const location = useLocation();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/deck/${deckId}`
      );
      if (response.ok) {
        const data = await response.json();
        setCards(data.cards);
      } else {
        console.error("Failed to fetch deck with cards");
      }
    };
    fetchDeck();
  }, [deckId, location.state?.cardAdded]);

  const handleDeleteCard = async (cardId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this card?"
    );
    if (isConfirmed) {
      // Proceed with deletion
      const response = await fetch(
        `${process.env.REACT_APP_URL}/card/${cardId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted card from local state to update UI
        setCards(cards.filter((card) => card._id !== cardId));
      } else {
        alert("Failed to delete the card.");
      }
    }
  };

  return (
    <div className="manage-cards">
      <h2>Manage Cards</h2>
      {cards.length > 0 ? (
        cards.map((card) => (
          <div key={card._id} className="card-item">
            <p>Question: {card.question}</p>
            <p>Answer: {card.answer}</p>
            <div className="card-action-links">
              <Link
                to={`/edit/card/${deckId}/${card._id}`}
                className="edit-link"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteCard(card._id)}
                className="delete-link"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No cards available. Add some!</p>
      )}
      <Link to={`/create/card/${deckId}`} className="add-card-button">
        Add New Card
      </Link>
    </div>
  );
};

export default ManageCards;
