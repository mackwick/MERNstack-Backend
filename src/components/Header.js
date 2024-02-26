import React from 'react'

const Header = ({ toggleTheme }) => {
    return (
    <div className="header">
    <h1>Study Buddy</h1>

    <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

export default Header