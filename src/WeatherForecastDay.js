import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function MaxTemp() {
    let max = Math.round(props.data.temp.max);
    return `${max}°`;
  }

  function MinTemp() {
    let min = Math.round(props.data.temp.min);
    return `${min}°`;
  }

  function formatForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="box-1">
      <ul>
        <li className="future-day">{formatForecastDay()}</li>
        <li>
          <img src={props.icon} alt={props.description} width="42" />
        </li>
        <li>
          <div className="temp-max">
            {MaxTemp()}
            <span className="temp-min">{MinTemp()}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
