import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const decks = useLoaderData();
  const [editMode, setEditMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // To control which dropdown is visible

  return (
    <div className="landing-container">
      <div className="title-container">
        <h1 className="page-heading">Flashcard Decks</h1>
        <div>
          <p onClick={() => setEditMode(!editMode)}>
            {editMode ? "Exit Edit Mode" : "Edit Mode"}
          </p>
          <span> | </span>
        </div>
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
                  onClick={() =>
                    setShowDropdown(showDropdown === deck._id ? null : deck._id)
                  }
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
                  onClick={() => {
                    /* handle delete deck */
                  }}
                >
                  <i className="fa-solid fa-trash"></i> Delete Deck
                </button>
                <Link
                  to={`/deck/${deck._id}/manage-cards`}
                  className="dropdown-item"
                >
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
