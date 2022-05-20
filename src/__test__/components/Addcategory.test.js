import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategory={setCategory} />);

  beforeEach(() => {
    /**
     * esta funcion lo que nos permite es limpiar todos los valores o  simulaciones las cuales haya hecho en el test anterior
     */
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  /**
   * la prueba a continuación es para hacer la simulacion de que el input cambie su
   * valor y se ejecute el evento onChange del input
   *
   * nota: es importante tener en cuenta de que en caso de que nuestro componente a probar
   * tenga mas tag inputs (como no lo es este caso), si queremos testear varios inputs podemos selecconarlos
   * mediante una clase o un id el cual le hayamos proporcionado
   */
  test("debe de cambiar el state input cuando el usuario escribe en el input", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", { target: { value } });
    expect(wrapper.find("small").text().trim()).toBe(value);
  });

  /**
   * simularemos todo el evento onSubmit del formulario
   */

  test("NO debe hacer el fetch sino cumple con la condición del handleSubmit", () => {
    const form = wrapper.find("form");
    let preventDefault = () => {};
    form.simulate("submit", { preventDefault });
    //sino tenemos un inputValue no podemos llamar a la función setCategory
    expect(setCategory).not.toHaveBeenCalled();
  });

  /**
   * simluandp el evento onSubmit del formulario llamando a la función handleSubmit y limpiamos el input
   */
  test("debe llamar el setCategory y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });

    const form = wrapper.find("form");
    let preventDefault = () => {};
    form.simulate("submit", { preventDefault });

    expect(setCategory).toHaveBeenCalled();
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
