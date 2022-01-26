import React from "react";
import "./Weather.css";

import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import SunPosition from "./SunPosition";
import AdditionalWeather from "./AdditionalWeather";
import Footer from "./Footer";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    date: "monday 7:45 PM",
  };
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
              <CurrentWeather />
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
