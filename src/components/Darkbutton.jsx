import React, { useState } from 'react';
import './Darkbutton.css';

function Darkbutton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.background = isDarkMode ? 'rgb(240, 240, 240)' : 'rgb(24, 24, 24)';
    document.body.style.color = isDarkMode ? 'rgb(0, 0, 0)' : 'rgb(240, 240, 240)';
  };

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Darkbutton;