import React from "react";

const GifGridItem = ({ gif }) => {
  return (
    <div className="card" key={gif.id}>
      <h2 className="title">{gif.title}</h2>
      <img src={gif.url} alt={gif.title} />
    </div>
  );
};

export default GifGridItem;
