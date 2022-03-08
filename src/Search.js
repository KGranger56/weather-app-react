import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, searchedCity] = useState("");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30e9dd107086e8cc692d0c7add1a109e&units=metric`;
    axios.get(url).then(handleUrl);

    function handleUrl(response) {
      setWeather({
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        emoji: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
      setLoaded(true);
    }
  }

  function updateCity(event) {
    searchedCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="block-2">
        <div className="box-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a City"
              autofocus="on"
              autocomplete="off"
              onChange={updateCity}
            />
            <input type="submit" value="Search" />
          </form>
          <div className="box-2">
            Last updated: <span id="current-day-info"></span>
          </div>
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
            <li>
              <img src={weather.emoji} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
