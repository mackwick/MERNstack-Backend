import React from "react";
import { Link } from "react-router-dom";
import studyBuddyAudio from "./audio/study-buddy.wav";

const Header = ({ toggleTheme }) => {
  const playAudio = () => {
    const audio = new Audio(studyBuddyAudio);
    audio.play();
  }
  return (
    <div className="header">
      <Link to={`/`} onClick={playAudio}>
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
