import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Titulo del GIF";
  const url = "https://localhost/algo.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de terner un h2 con el titulo", () => {
    const h2 = wrapper.find("h2");
    expect(h2.text().trim()).toBe(title);
  });

  test("la img debe tener dos atributos", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("el div debe tener en una de sus clases animate__delay-1s", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__delay-1s")).toBe(true);
  });
});
