import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import City from "./City";
import HourlyForecast from "./HourlyForecast";
import SunPosition from "./SunPosition";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";
import AdditionalWeather from "./AdditionalWeather";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
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
              <City data={weatherData} />
            </div>
            <div className="row">
              <div className="col-7">
                <WeatherInfo data={weatherData} />
                <hr />
                <HourlyForecast />
                <hr />
                <SunPosition />
                <hr />
                <AdditionalWeather data={weatherData} />
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
