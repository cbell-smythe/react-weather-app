import React, { useState } from "react";
import "./DayForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="DayForecast">
        <ul>
          <WeatherForecastDay data={forecast[0]} />
        </ul>
      </div>
    );
  } else {
    let apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
