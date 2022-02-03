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
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    return days[day];
  }
  return (
    <li className="ForecastInfo">
      <div className="row">
        <div className="col-4">
          <WeatherIcon
            code={props.data.weather[0].icon}
            alt={props.data.weather[0].description}
          />
        </div>
        <div className="col-4">
          <span className="MaxTemp">{maxTemperature()}</span>
        </div>
        <div className="col-4">
          <span className="MinTemp">{minTemperature()}</span>
        </div>
      </div>
      <div className="Date">{day()}</div>
    </li>
  );
}
