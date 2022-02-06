import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HourlyForecast.css";
import WeatherForecastHourly from "./WeatherForecastHourly";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [hourly, setHourly] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setHourly(response.data.hourly);
    setLoaded(true);
  }
  function load() {
    let apiKey = "40687d56eaf0d831bbcf4565c75ed97f";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="HourlyForecast">
        <div className="row">
          <div className="col-3">
            <WeatherForecastHourly data={hourly[0]} />
          </div>
          <div className="col-3">
            <WeatherForecastHourly data={hourly[1]} />
          </div>
          <div className="col-3">
            <WeatherForecastHourly data={hourly[2]} />
          </div>
          <div className="col-3">
            <WeatherForecastHourly data={hourly[3]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
