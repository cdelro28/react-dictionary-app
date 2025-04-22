import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 9) {
              return (
                <div className="col-4">
                  <img
                    src={photo.src.portrait}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
