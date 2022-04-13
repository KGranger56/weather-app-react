import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span id="current-temp">{Math.round(props.temperature)}</span>
        <span className="unit">
          <strong>°F</strong> |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = (props.temperature - 32) * (5 / 9);
    return (
      <div className="WeatherTemperature">
        <span id="current-temp">{Math.round(celsius)}</span>
        <span className="unit">
          <strong>°C</strong> |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
