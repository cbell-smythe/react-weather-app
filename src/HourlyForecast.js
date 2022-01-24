import React from "react";
import "./HourlyForecast.css";

export default function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <div className="row">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="partly-cloudy"
          />
          5PM
        </div>
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="partly-cloudy"
          />
          6PM
        </div>
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/snow_s_rain.png"
            alt="snow-rain"
          />
          7PM
        </div>
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
            alt="snow"
          />
          8PM
        </div>
      </div>
    </div>
  );
}
