import React from "react";

export default function Audio(props) {
  if (props.audio) {
    return (
      <div className="mt-2">
        <audio controls src={props.audio}></audio>
      </div>
    );
  } else {
    return null;
  }
}
