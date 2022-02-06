import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHourly(props) {
  function hour() {
    let hour = new Date(props.data.dt * 1000);
    let hours = hour.getHours() > 12 ? hour.getHours() - 12 : hour.getHours();
    let amPm = hour.getHours() >= 12 ? "PM" : "AM";

    return `${hours}${amPm}`;
  }

  return (
    <div className="HourlyForecast">
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      {hour()}{" "}
    </div>
  );
}
