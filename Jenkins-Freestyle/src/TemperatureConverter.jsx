import React, { useState } from "react";
import "./TemperatureConverter.css"; // Import the CSS file

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
      return;
    } 
    setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
      return;
    }
    setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div className="app-container">
      <div className="converter-card">
        <h1>🌡 Temperature Converter</h1>

        <div className="input-group">
          <label>Celsius (°C)</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter Celsius"
          />
        </div>

        <div className="input-group">
          <label>Fahrenheit (°F)</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter Fahrenheit"
          />
        </div>

        <button onClick={() => { setCelsius(""); setFahrenheit(""); }}>
          Reset
        </button>
      </div>
    </div>
  );
}
