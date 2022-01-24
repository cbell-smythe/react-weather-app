import React from "react";
import "./Weather.css";
import Search from "./Search";
import City from "./City";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="WeatherAppWrapper">
        <div className="WeatherApp">
          <Search />
          <div className="row">
            <div className="col-7">
              <City />
              <CurrentWeather />
              <hr />
              <HourlyForecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
