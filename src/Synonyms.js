import React from "react";

export default function Synonmys(props) {
  if (props.synonyms) {
    return (
      <div>
        Similar:{" "}
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="Synonyms">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
