import React from "react";

export default function WeatherForecastHourly(timestamp) {
  let hour = new Date(timestamp * 1000);
  let hours = hour.getHours() > 12 ? hour.getHours() - 12 : hour.getHours();
  let amPm = hour.getHours() >= 12 ? "PM" : "AM";

  return `${hours}${amPm}`;
}
