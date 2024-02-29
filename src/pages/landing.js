import React, { useState, useEffect } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";

const Landing = () => {
  // Use loader data as the initial state
  const loaderDecks = useLoaderData();
  const [decks, setDecks] = useState(loaderDecks);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const deleteDeck = async (deckId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this deck?");
    if (isConfirmed) {
      try {
        await fetch(`${process.env.REACT_APP_URL}/deck/${deckId}`, {
          method: 'DELETE',
        });
        // Update the decks state to exclude the deleted deck
        setDecks(decks.filter(deck => deck._id !== deckId));
      } catch (error) {
        console.error('Failed to delete the deck:', error);
        alert('Failed to delete the deck.');
      }
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    // Close all dropdowns when exiting edit mode
    setShowDropdown(null);
  };

  const handleGearClick = (e, deckId) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDropdown(showDropdown === deckId ? null : deckId);
  };

  return (
    <div className="landing-container">
      <div className="title-container">
        <h1 className="page-heading">Flashcard Decks</h1>
        <button onClick={toggleEditMode}>
          {editMode ? "Exit Edit Mode" : "Enter Edit Mode"}
        </button>
        {editMode && <Link to="/create" className="add-deck-button">Add Deck</Link>}
      </div>

      <div className="decks-container">
        {decks.map((deck) => (
          <div key={deck._id} className="deck">
            <h3>{deck.name}</h3>
            {editMode && (
              <>
                <i className="fa-solid fa-gear" onClick={(e) => handleGearClick(e, deck._id)}></i>
                {showDropdown === deck._id && (
                  <div className="dropdown-menu">
                    <Link to={`/edit/deck/${deck._id}`} className="dropdown-item">
                      <i className="fa-solid fa-pencil"></i> Edit Deck
                    </Link>
                    <button onClick={() => deleteDeck(deck._id)} className="dropdown-item">
                      <i className="fa-solid fa-trash"></i> Delete Deck
                    </button>
                    <Link to={`/deck/${deck._id}/manage-cards`} className="dropdown-item">
                      Manage Cards
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
