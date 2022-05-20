import { renderHook } from "@testing-library/react";
import { useFecthGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el state inicial", () => {
    /**
     * el metodo renderHook lo que nos permitirá es crear un componente  virtual o simulado
     * en el cual podremos ejecutar nuestro hook
     */
    const res = renderHook(() => useFecthGifs("Colombia"));
    console.log(res);
  });

  test("debe retornar un arreglo de gifs y poner el loading el false", async () => {
    /**
     * el metodo waitFor... nos permite saber cuando se ha cambiado el state de nuestro
     * custom hook
     */
    const { result, waitForNextUpdate } = renderHook(() =>
      useFecthGifs("Colombia")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
