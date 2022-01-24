import React from "react";
import "./Weather.css";
import Search from "./Search";
import City from "./City";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import SunPosition from "./SunPosition";
import AdditionalWeather from "./AdditionalWeather";
import Footer from "./Footer";

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
