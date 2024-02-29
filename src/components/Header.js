import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-regular-svg-icons";

// Include theme as a prop here
const Header = ({ toggleTheme, theme }) => {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1 className="mainTitle">Study Buddy</h1>
      </Link>
      <div className="toggle-action">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox"
          onChange={toggleTheme}
        />
        <label htmlFor="checkbox" id="switch-button">
          {theme === "light" ? (
            <FontAwesomeIcon className="moon" icon={faMoon} />
          ) : (
            <FontAwesomeIcon className="light" icon={faLightbulb} />
          )}
        </label>
      </div>
    </div>
  );
};

export default Header;
