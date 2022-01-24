import React from "react";
import "./SunPosition.css";

export default function SunPosition() {
  return (
    <div className="SunPosition">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <img src="images/sunrise_icon.png" alt="" />
              <div>
                <strong>sunrise</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <img src="images/sunset_icon.png" alt="" />
              <div>
                <strong>sunset</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
