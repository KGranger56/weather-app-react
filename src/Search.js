import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Search.css";
/*import { propTypes } from "react-bootstrap/esm/Image";*/
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import ShowForecast from "./ShowForecast";

export default function Search() {
  let [city, searchedCity] = useState("");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);

  let apiKey = "30e9dd107086e8cc692d0c7add1a109e";

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleUrl);

    function handleUrl(response) {
      {
        /*console.log(response);*/
      }
      setWeather({
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather.main,
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
        temperature: response.data.main.temp,
        maxTemp: response.data.main.temp_max,
        minTemp: response.data.main.temp_min,
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
      <div>
        <div className="block-2">
          <div className="box-1">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a City"
                autoFocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
        <div className="CurrentWeather">
          <div className="block-3">
            <div className="box-1">
              <ul>
                <li>
                  <h1 id="city">Currently in {city}</h1>
                </li>
                <li>
                  <h5 className="current-date">
                    <FormattedDate date={weather.date} />
                  </h5>
                </li>
              </ul>
            </div>
            <div className="box-2" id="current-description">
              {weather.description}
            </div>
          </div>

          <div className="block-4">
            <div className="box-1">
              <img src={weather.emoji} alt={weather.description} id="current-emoji" />
            </div>
            <div className="box-2">
              <WeatherTemperature temperature={weather.temperature} />
            </div>
            <div className="box-3">
              <ul>
                <li>High: {Math.round(weather.maxTemp)}</li>
                <li>Low: {Math.round(weather.minTemp)}</li>
              </ul>
            </div>
            <div className="box-4">
              <ul>
                <li id="current-humidity">Humidity: {Math.round(weather.humidity)}%</li>
                <li id="current-wind">Wind: {Math.round(weather.wind)}mph</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <ShowForecast lat={weather.latitude} lon={weather.longitude} />
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
