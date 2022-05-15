import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFecthGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGifs(category).then((gifs) =>
        setState({
          data: gifs,
          loading: false,
        })
      );
    }, 2000);
  }, [category]);

  return state;
};
