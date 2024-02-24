import React from 'react'

const Header = ({ toggleTheme }) => {
    return (
    <div className="header">
    <h1>FLASH CARDS APP</h1>

    <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

export default Header