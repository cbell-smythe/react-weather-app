import React from "react";

export default function FormattedDate(props) {
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let day = days[props.date.getDay()];
  let hours =
    props.date.getHours() > 12
      ? props.date.getHours() - 12
      : props.date.getHours();

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let amPm = props.date.getHours() >= 12 ? "PM" : "AM";
  return (
    <span>
      {day} {hours}:{minutes} {amPm}
    </span>
  );
}
