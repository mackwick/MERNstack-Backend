import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // State to manage the theme, defaulting to 'light'
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  // Effect to apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
