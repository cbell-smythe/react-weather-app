import React from "react";
import "./Search.css";

export default function Search() {
  let weatherData = {
    city: "Mississauga",
    date: "monday 7:45 PM",
  };

  return (
    <div className="Search">
      <form className="mb-2">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city..."
              className="form-control"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-outline-dark w-100"
            />
          </div>
        </div>
      </form>
      <div className="City">
        <h1>{weatherData.city}</h1>
        <h2>last refresh @ {weatherData.date}</h2>
      </div>
    </div>
  );
}
