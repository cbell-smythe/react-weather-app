import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDeafult();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <span>
        {Math.round(props.celsius)}
        <span className="Units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return "F";
  }
}
