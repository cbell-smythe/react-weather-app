import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by Chrystal Bell-Smythe and is{" "}
        <a
          href="https://github.com/cbell-smythe/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="plain"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://infallible-varahamihira-1cbfea.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="plain"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}
