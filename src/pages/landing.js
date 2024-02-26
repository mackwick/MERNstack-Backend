import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const decks = useLoaderData();
  const [editMode, setEditMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // To control which dropdown is visible

  return (
    <div className="landing-container">
      <div className="title-container">
        <h1>Decks</h1>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Exit Edit Mode" : "Edit Mode"}
        </button>
      </div>

      <div className="decks-container">
        {decks.map((deck) => (
          <div key={deck._id} className="deck">
            {editMode && (
              <div>
                <button onClick={() => setShowDropdown(showDropdown === deck._id ? null : deck._id)}>
                  Gear Icon
                </button>
                {showDropdown === deck._id && (
                  <div className="dropdown-menu">
                    <Link to={`/edit/deck/${deck._id}`}>Edit Deck</Link>
                    <button onClick={() => {/* handle delete deck */}}>Delete Deck</button>
                    <Link to={`/deck/${deck._id}/manage-cards`}>Manage Cards</Link>
                  </div>
                )}
              </div>
            )}
            <Link to={`/deck/${deck._id}`} style={{ textDecoration: 'none' }}>
              <h3>{deck.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
