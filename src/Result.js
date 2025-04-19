import React from "react";
import Synonyms from "./Synonyms";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        <small>{props.result.phonetic}</small>
        <p>
          {props.result.meanings.map(function (meanings, index) {
            return (
              <div key={index} className="text-start m-5 ">
                <p>
                  <strong>{meanings.partOfSpeech}</strong>
                </p>
                <p>
                  <big>{meanings.definition}</big>
                </p>
                <p>
                  <em>"{meanings.example}"</em>
                </p>
                <Synonyms synonyms={meanings.synonyms} />
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
