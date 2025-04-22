import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <div>
          {props.result.meanings.map(function (meanings, index) {
            return (
              <section key={index}>
                <div className="PartOfSpeech">{meanings.partOfSpeech}</div>
                <div className="Definition">{meanings.definition}</div>
                <Example example={meanings.example} />
                <Synonyms synonyms={meanings.synonyms} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
