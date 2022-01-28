import React from "react";
import FormattedDate from "./FormattedDate";

export default function City(props) {
  return (
    <div className="City">
      <h1>{props.data.city}</h1>
      <h2>
        last refresh @ <FormattedDate date={props.data.date} />
      </h2>
    </div>
  );
}
