import React from "react";
import PropTypes from "prop-types";
import "animate.css";
const GifGridItem = ({ id, title, url }) => {
  return (
    <div
      className="card animate__animated animate__zoomIn animate__delay-1s"
      key={id}
    >
      <h2 className="title">{title}</h2>
      <img src={url} alt={title} />
    </div>
  );
};

GifGridItem.protoTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
