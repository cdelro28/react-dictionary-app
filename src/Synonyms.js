import React from "react";

export default function Synonmys(props) {
  if (props.synonyms) {
    return (
      <div>
        Similar:{" "}
        {props.synonyms.map(function (synonym, index) {
          if (index < 5) {
            return (
              <span key={index} className="Synonyms">
                {synonym}
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
