import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return day;
  }
  return (
    <li className="ForecastInfo">
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      <span className="MaxTemp">{maxTemperature()}</span>
      <span className="MinTemp">{minTemperature()}</span>
      <div className="Date">{day()}</div>
    </li>
  );
}
