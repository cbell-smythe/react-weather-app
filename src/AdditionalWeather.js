import React from "react";

export default function AdditionalWeather(props) {
  return (
    <div className="AdditionalWeather">
      <ul>
        <li>Feels Like: {Math.round(props.data.feelsLike)}°</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
      </ul>
    </div>
  );
}
