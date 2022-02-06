import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import City from "./City";
import HourlyForecast from "./HourlyForecast";
import SunPosition from "./SunPosition";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";
import AdditionalWeather from "./AdditionalWeather";
import DayForecast from "./DayForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="WeatherAppWrapper">
          <div className="WeatherApp">
            <div className="Search">
              <form className="mb-2" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="enter a city..."
                      className="form-control"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
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
            </div>
            <div className="row">
              <div className="col-7">
                <City data={weatherData} />
                <WeatherInfo data={weatherData} />
                <hr />
                <HourlyForecast coordinates={weatherData.coordinates} />
                <hr />
                <SunPosition />
                <hr />
                <AdditionalWeather data={weatherData} />
              </div>
              <div className="col-5">
                <DayForecast coordinates={weatherData.coordinates} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
