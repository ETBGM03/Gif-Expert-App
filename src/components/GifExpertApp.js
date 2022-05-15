import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [category, setCategory] = useState(["One Punch"]);

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <ol>
        {category.map((categ) => {
          return <GifGrid key={categ} category={categ} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
