import React from "react";
import { render } from "@testing-library/react";
import Input from "../../components/common/Input.jsx";

const handleChange = ({ currentTarget }) => {
  console.log("currentTarget", currentTarget);
};

test("should display the input component", () => {
  const { getByTestId } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const firstNameInput = getByTestId("input-element-firstname");

  expect(firstNameInput).toBeInTheDocument();
});

test("should display the type property", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const firstNameInput = container.querySelector("input[type=text]");

  expect(firstNameInput).toBeInTheDocument();
});

test("should display the name property", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const firstNameInput = container.querySelector("input[name=firstname]");

  expect(firstNameInput).toBeInTheDocument();
});

test("should display the value property", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const value = container.querySelector("input").getAttribute("value");

  expect(value).toBe("Jonh");
});

test("should display the input's label", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const label = container.querySelector("label").textContent;

  expect(label).toBe("First name");
});

test("should display the input's placeholder", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const placeholder = container
    .querySelector("input")
    .getAttribute("placeholder");

  expect(placeholder).toBe("first name");
});

test("should not display the error if error props is empty string", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error=""
    />
  );

  const errors = container.querySelector("[data-testid=input-element_error]");

  expect(errors).toBe(null);
});

test("should not display the error if error props is empty string", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error="First name is require"
    />
  );

  const errors = container.querySelector("[data-testid=input-element_error]");

  expect(errors).toBeInTheDocument();
});

test("should render the error message if it's a valid string", () => {
  const { container } = render(
    <Input
      type="text"
      name="firstname"
      value="Jonh"
      label="First name"
      placeholder="first name"
      onChange={handleChange}
      error="First name is require"
    />
  );

  const error = container.querySelector("[data-testid=input-element_error]")
    .textContent;

  expect(error).toBe("First name is require");
});
