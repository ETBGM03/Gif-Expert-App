import { getGifs } from "../../helpers/getGif";

describe("pruebas con getGif Fecth", () => {
  test("debe traer 10 items", async () => {
    const res = await getGifs("Colombia");
    expect(res.length).toBe(10);
  });

  test("no mandar info a la funcion", async () => {
    const res = await getGifs("");
    expect(res.length).toBe(0);
  });
});
