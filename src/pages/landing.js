import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const decks = useLoaderData();
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode

  return (
    <div className="landing-container">
        <div className="title-container">
          <h1>Decks</h1>
          {/* Toggle Edit Mode Button */}
          <button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Exit Edit Mode" : "Edit Mode"}
          </button>
        </div>

        <div className="decks-container">
          {decks.map((deck) => (
            <div key={deck._id} className="deck">
              {/* Edit Mode UI */}
              {editMode && (
                <div className="edit-options">
                  <Link to={`/edit/deck/${deck._id}`}>Edit Deck</Link>
                  {/* Additional edit options here */}
                </div>
              )}
              {/* Deck Display */}
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
