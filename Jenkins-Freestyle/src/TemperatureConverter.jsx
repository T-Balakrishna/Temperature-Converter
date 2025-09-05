import React, { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">🌡 Temperature Converter</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4">
        <div>
          <label className="block font-medium mb-1">Celsius</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter °C"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter °F"
          />
        </div>
      </div>
    </div>
  );
}
