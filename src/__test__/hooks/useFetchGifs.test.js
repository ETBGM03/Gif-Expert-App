import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el state inicial", () => {
    /**
     * el metodo renderHook lo que nos permitirá es crear un componente  virtual o simulado
     * en el cual podremos ejecutar nuestro hook
     */
    const res = renderHook(() => useFecthGifs("Colombia"));
    const { data, loading } = res.result.current;
    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("debe retornar un arreglo de gifs y poner el loading el false", async () => {
    /**
     * el metodo waitFor... nos permite saber cuando se ha cambiado el state de nuestro
     * custom hook
     */
    const { result } = renderHook(() => useFecthGifs("Colombia"));
    await waitFor(() => {
      const { data, loading } = result.current;
      expect(data.length).toBe(10);
      expect(loading).toBe(false);
    });
  });
});
