import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1 className="mainTitle">Study Buddy</h1>
      </Link>

      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default Header;
