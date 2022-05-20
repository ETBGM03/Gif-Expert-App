import { shallow } from "enzyme";
import React from "react";
import GifExpertApp from "../../components/GifExpertApp";

describe("probando el componente <GifExpertApp />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const catageories = ["Colombia", "pereira"];
    const wrapper = shallow(<GifExpertApp defaultCategories={catageories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(catageories.length);
  });
});
