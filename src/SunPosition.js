import React from "react";
import "./SunPosition.css";
import sunrise_icon from "./images/sunrise_icon.png";
import sunset_icon from "./images/sunset_icon.png";

export default function SunPosition(props) {
  function sunrise() {
    let date = new Date(props.data.sunrise * 1000);
    let hours = date.getHours();
    if (hours > 12) {
      hours = date.getHours() - 12;
    }
    let amPm = date.getHours() >= 12 ? "PM" : "AM";

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes} ${amPm}`;
  }
  function sunset() {
    let date = new Date(props.data.sunset * 1000);
    let hours = date.getHours();
    if (hours > 12) {
      hours = date.getHours() - 12;
    }
    let amPm = date.getHours() >= 12 ? "PM" : "AM";

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes} ${amPm}`;
  }
  return (
    <div className="SunPosition">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <img src={sunrise_icon} alt="" />
              <div>
                <strong>{sunrise()}</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <img src={sunset_icon} alt="" />
              <div>
                <strong>{sunset()}</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
