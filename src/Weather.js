import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import HourlyForecast from "./HourlyForecast";
import SunPosition from "./SunPosition";
import Footer from "./Footer";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: "monday 7:45 PM",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="WeatherAppWrapper">
          <div className="WeatherApp">
            <div className="Search">
              <form className="mb-2">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="enter a city..."
                      className="form-control"
                      autoComplete="off"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="search"
                      className="btn btn-outline-dark w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="City">
                <h1>{weatherData.city}</h1>
                <h2>last refresh @ {weatherData.date}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <div>
                  <div className="CurrentWeather">
                    <img
                      src={weatherData.iconUrl}
                      className="float-left"
                      alt="mostly cloudy"
                    />
                    <span>
                      {Math.round(weatherData.temperature)}
                      <span className="Units">°C</span>
                    </span>
                  </div>
                  <div className="WeatherDescription">
                    {weatherData.description}
                  </div>
                </div>
                <hr />
                <HourlyForecast />
                <hr />
                <SunPosition />
                <hr />
                <div className="AdditionalWeather">
                  <ul>
                    <li>Feels Like: {Math.round(weatherData.feelsLike)}°</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                  </ul>
                </div>
              </div>
              <div className="col-5"></div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    let apiKey = "40687d56eaf0d831bbcf4565c75ed97f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
