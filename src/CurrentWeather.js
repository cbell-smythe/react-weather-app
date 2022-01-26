import React from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let apiKey = "40687d56eaf0d831bbcf4565c75ed97f";
  let city = "Toronto";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return (
    <div>
      <div className="CurrentWeather">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
          className="float-left"
          alt="mostly cloudy"
        />
        <span>
          -7
          <span className="Units">°C</span>
        </span>
      </div>
      <div className="WeatherDescription">mostly cloudy</div>
    </div>
  );
}
