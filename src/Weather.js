import React from "react";
import "./Weather.css";
import Search from "./Search";
import City from "./City";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="WeatherAppWrapper">
        <div className="WeatherApp">
          <Search />
          <div className="row">
            <div className="col-7">
              <City />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
