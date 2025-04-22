import React from "react";
import Audio from "./Audio";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div>
        <section>
          <h2>{props.phonetics.word}</h2>
          <p>{props.phonetics.phonetics[0].text}</p>
          <Audio audio={props.phonetics.phonetics[0].audio} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
