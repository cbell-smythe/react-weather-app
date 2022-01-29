import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="CurrentWeather">
        <img
          src={props.data.iconUrl}
          className="float-left"
          alt="mostly cloudy"
        />
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="WeatherDescription">{props.data.description}</div>
    </div>
  );
}
