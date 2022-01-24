import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    description: "mostly cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    currentTemperature: -7,
  };

  return (
    <div>
      <div className="CurrentWeather">
        <img
          src={weatherData.imgUrl}
          className="float-left"
          alt={weatherData.description}
        />
        <span>
          {weatherData.currentTemperature}
          <span className="Units">°C</span>
        </span>
      </div>
      <div className="WeatherDescription">{weatherData.description}</div>
    </div>
  );
}
