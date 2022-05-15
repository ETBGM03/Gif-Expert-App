import React from "react";
import "animate.css";
const GifGridItem = ({ gif }) => {
  return (
    <div
      className="card animate__animated animate__zoomIn animate__delay-2s"
      key={gif.id}
    >
      <h2 className="title">{gif.title}</h2>
      <img src={gif.url} alt={gif.title} />
    </div>
  );
};

export default GifGridItem;
