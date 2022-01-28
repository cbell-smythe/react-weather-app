import React from "react";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="CurrentWeather">
        <img
          src={props.data.iconUrl}
          className="float-left"
          alt="mostly cloudy"
        />
        <span>
          {Math.round(props.data.temperature)}
          <span className="Units">°C</span>
        </span>
      </div>
      <div className="WeatherDescription">{props.data.description}</div>
    </div>
  );
}
