import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1 className="mainTitle">Study Buddy</h1>
      </Link>
      <div className="toggle-action">
        <input type="checkbox" className="checkbox" />
        <label for="checkbox" id="switch-button" onClick={toggleTheme}>
          {/* <i class="fa-regular fa-sun"></i>
          <i class="fa-regular fa-moon"></i> */}
        </label>
      </div>
    </div>
  );
};

export default Header;
