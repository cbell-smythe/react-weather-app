import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span>{Math.round(props.celsius)}</span>
      <span className="Units">°C</span>
    </span>
  );
}
