import React from "react";
import "./AdditionalWeather.css";

export default function AdditionalWeather() {
  let weatherData = {
    feelsLike: -10,
    humidity: 73,
    wind: 10,
  };

  return (
    <div className="AdditionalWeather">
      <ul>
        <li>Feels Like: {weatherData.feelsLike}°</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind: {weatherData.wind} km/h</li>
      </ul>
    </div>
  );
}
