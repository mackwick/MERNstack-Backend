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
            {editMode && (
              <div>
                <i
                  class="fa-solid fa-gear"
                  id="gear"
                  onClick={() =>
                    setShowDropdown(showDropdown === deck._id ? null : deck._id)
                  }
                ></i>

                {showDropdown === deck._id && (
                  <div className="dropdown-menu">
                    <Link to={`/edit/deck/${deck._id}`}>
                      <i class="fa-solid fa-pencil"></i>
                    </Link>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => {
                        /* handle delete deck */
                      }}
                    ></i>
                    <Link to={`/deck/${deck._id}/manage-cards`}>
                      Manage Cards
                    </Link>
                  </div>
                )}
              </div>
            )}
            <Link to={`/deck/${deck._id}`} style={{ textDecoration: "none" }}>
              <h3>{deck.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
