import React from "react";
import "./DayForecast.css";

export default function DayForecast(props) {
  return (
    <div className="DayForecast">
      <ul>
        <li className="ForecastInfo">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span className="MaxTemp">24°</span>
          <span className="MinTemp">17°</span>
          <div className="Date">monday</div>
        </li>
        <hr />
        <li className="ForecastInfo">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span className="MaxTemp">24°</span>
          <span className="MinTemp">17°</span>
          <div className="Date">tuesday</div>
        </li>
        <hr />
        <li className="ForecastInfo">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span className="MaxTemp">24°</span>
          <span className="MinTemp">17°</span>
          <div className="Date">wednesday</div>
        </li>
        <hr />
        <li className="ForecastInfo">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span className="MaxTemp">24°</span>
          <span className="MinTemp">17°</span>
          <div className="Date">thursday</div>
        </li>
        <hr />
        <li className="ForecastInfo">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
          <span className="MaxTemp">24°</span>
          <span className="MinTemp">17°</span>
          <div className="Date">friday</div>
        </li>
      </ul>
    </div>
  );
}
