export const getGifs = async (valueInput) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5ET1JOC0D12bKDXdrYPyB2XzEgxm5AI9&q=${encodeURI(
      valueInput
    )}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifsResult = data.map((datos) => {
      return {
        id: datos.id,
        title: datos.title,
        url: datos.images?.downsized_medium.url,
      };
    });
    return gifsResult;
  } catch (error) {
    console.log(error);
  }
};
