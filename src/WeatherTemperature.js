import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span id="current-temp">{Math.round(props.temperature)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celcius = (props.fahrenheit - 32) * (5 / 9);
    return (
      <div className="WeatherTemperature">
        <span id="current-temp">{Math.round(celcius())}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showFahrenheit}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
