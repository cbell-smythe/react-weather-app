import React from "react";
import "./City.css";

export default function City() {
  let weatherData = {
    city: "Mississauga",
    date: "monday 7:45 PM",
  };

  return (
    <div className="City">
      <h1>{weatherData.city}</h1>
      <h2>last refresh @ {weatherData.date}</h2>
    </div>
  );
}
