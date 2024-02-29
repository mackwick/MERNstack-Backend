import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const decks = useLoaderData();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // To control which dropdown is visible

  // Function to delete a deck
  const deleteDeck = async (deckId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this deck?");
    if (isConfirmed) {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/deck/${deckId}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Network response was not ok.');
        // Remove the deck from the UI
        const updatedDecks = decks.filter(deck => deck._id !== deckId);
        navigate(0); // Reloads the current page to reflect the deletion
      } catch (error) {
        console.error('Failed to delete the deck:', error);
        alert('Failed to delete the deck.');
      }
    }
  };

  return (
    <div className="landing-container">
      <div className="title-container">
        <h1 className="page-heading">Flashcard Decks</h1>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Exit Edit Mode" : "Edit Mode"}
        </button>
        {editMode && (
          <Link to="/create/deck" className="add-deck-button">Add New Deck</Link>
        )}
      </div>

      <div className="decks-container">
        {decks.map((deck) => (
          <div key={deck._id} className="deck">
            <div className="deck-actions">
              <Link to={`/deck/${deck._id}`} className="deck-link">
                <h3>{deck.name}</h3>
              </Link>
              {editMode && (
                <i
                  className="fa-solid fa-gear"
                  onClick={() => setShowDropdown(showDropdown === deck._id ? null : deck._id)}
                ></i>
              )}
            </div>
            {showDropdown === deck._id && (
              <div className="dropdown-menu">
                <Link to={`/edit/deck/${deck._id}`} className="dropdown-item">
                  <i className="fa-solid fa-pencil"></i> Edit Deck
                </Link>
                <button
                  className="dropdown-item"
                  onClick={() => deleteDeck(deck._id)}
                >
                  <i className="fa-solid fa-trash"></i> Delete Deck
                </button>
                <Link to={`/deck/${deck._id}/manage-cards`} className="dropdown-item">
                  Manage Cards
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
