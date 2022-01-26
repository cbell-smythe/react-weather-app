import React from "react";
import "./Weather.css";

import HourlyForecast from "./HourlyForecast";
import SunPosition from "./SunPosition";
import AdditionalWeather from "./AdditionalWeather";
import Footer from "./Footer";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    date: "monday 7:45 PM",
  };
  //let apiKey = "40687d56eaf0d831bbcf4565c75ed97f";
  //let city = "Toronto";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
              <hr />
              <HourlyForecast />
              <hr />
              <SunPosition />
              <hr />
              <AdditionalWeather />
            </div>
            <div className="col-5"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
