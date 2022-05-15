import { useFecthGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
const GifGrid = ({ category }) => {
  const { data, loading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {data?.map((gif) => (
          <GifGridItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
