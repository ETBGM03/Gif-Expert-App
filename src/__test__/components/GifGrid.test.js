import React from "react";
import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFecthGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";

/**
 * jest.mock lo que nos va a permitir es simular las llamadas a las funciones
 * que estén en ese archivo. Lo cual podemos controlar la informacion que es retornada
 * pero ojo de forma simulada
 */
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  let category = "Colombia";
  test("debe mostrar el componente correctamente", () => {
    useFecthGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar item cuando se cargan imágenes useFecthGifs", () => {
    const gifs = [
      {
        id: 123,
        title: "stef",
        url: "http:localhost:3000/stef",
      },
    ];
    useFecthGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    /**
     * evaluar un mock con el metodo toMatchSnapshot no es tan buena idea
     * ya que lo está comparando con el html. y no es lo que queremos, sino testear
     * de una manera mejor.
     */
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
