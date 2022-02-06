import React, { useState, useEffect } from "react";
import "./DayForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
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
      <div className="DayForecast">
        <ul>
          <WeatherForecastDay data={forecast[0]} />
          <hr />
          <WeatherForecastDay data={forecast[1]} />
          <hr />
          <WeatherForecastDay data={forecast[2]} />
          <hr />
          <WeatherForecastDay data={forecast[3]} />
          <hr />
          <WeatherForecastDay data={forecast[4]} />
        </ul>
      </div>
    );
  } else {
    load();
    return null;
  }
}
