import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function ShowForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [weather, setWeather] = useState(" ");

  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setWeather({
      icon: `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      description: response.data.daily[0].weather[0].description,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="block-5">
          <div className="box-1">
            {forecast.map(function (dailyForecast, index) {
              if (index < 7 && index > 0) {
                return (
                  <div key={index}>
                    <WeatherForecastDay
                      data={dailyForecast}
                      icon={weather.icon}
                      description={weather.description}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "30e9dd107086e8cc692d0c7add1a109e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
