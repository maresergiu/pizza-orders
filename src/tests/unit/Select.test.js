import React from "react";
import { render } from "@testing-library/react";
import mockedData from "../../helpers/mockedData";
import Select from "../../components/common/Select.jsx";
import Input from "../../components/common/Input.jsx";

const handleChange = (obj) => obj;

test("should display the select component", () => {
  const { getByTestId } = render(
    <Select
      name="pizza"
      label="Pizza"
      options={mockedData.pizzaArray}
      onChange={handleChange}
      error=""
    />
  );

  const select = getByTestId("select-pizza");

  expect(select).toBeInTheDocument();
});

test("should display the name property", () => {
  const { container } = render(
    <Select
      name="pizza"
      label="Pizza"
      options={mockedData.pizzaArray}
      onChange={handleChange}
      error=""
    />
  );

  const selectName = container.querySelector("select").getAttribute("name");

  expect(selectName).toBe("pizza");
});

test("should display the label", () => {
  const { container } = render(
    <Select
      name="pizza"
      label="Pizza"
      options={mockedData.pizzaArray}
      onChange={handleChange}
      error=""
    />
  );

  const selectLabel = container.querySelector("label[for=pizza]").textContent;

  expect(selectLabel).toBe("Pizza");
});

test("should not render the error if error props is not populated", () => {
  const { container } = render(
    <Select
      name="pizza"
      label="Pizza"
      options={mockedData.pizzaArray}
      onChange={handleChange}
      error=""
    />
  );

  const errors = container.querySelector("[data-testid=input-element_error]");

  expect(errors).toBe(null);
});

test("should render the error if error props is populated", () => {
  const { container } = render(
    <Select
      name="pizza"
      label="Pizza"
      options={mockedData.pizzaArray}
      onChange={handleChange}
      error="Please select a pizza"
    />
  );

  const errors = container.querySelector("[data-testid=input-element_error]");

  expect(errors).toBeInTheDocument();
});

test("should render the error message if it's a valid string", () => {
  const { container } = render(
    <Select
      name="pizza"
      label="Pizza"
      options={mockedData.pizzaArray}
      onChange={handleChange}
      error="Please select a pizza"
    />
  );

  const errors = container.querySelector("[data-testid=input-element_error]")
    .textContent;

  expect(errors).toBe("Please select a pizza");
});
