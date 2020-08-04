import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import PizzaOrderForm from "../../components/PizzaOrderForm.jsx";
import store from "../../store/index";
import testingHelpers from "../../helpers/testing";

test("should show no errors messages if form passes validation", () => {
  const history = createBrowserHistory();

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  testingHelpers.insertInputValues(userEvent, getByTestId);

  // validate the form
  userEvent.click(getByTestId("form-submit-cta"));

  expect(getByTestId("input-element-firstname")).toHaveValue("Jonh");
  expect(
    container.querySelectorAll("[data-testid=input-element_error]").length === 0
  ).toBe(true);
});

test("should show no errors messages if form passes validation", () => {
  const history = createBrowserHistory();

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  testingHelpers.insertInputValues(userEvent, getByTestId);

  // validate the form
  userEvent.click(getByTestId("form-submit-cta"));

  expect(getByTestId("input-element-firstname")).toHaveValue("Jonh");
  expect(getByTestId("input-element-lastname")).toHaveValue("Doe");
  expect(getByTestId("input-element-email")).toHaveValue("a@a.com");
  expect(getByTestId("input-element-phone")).toHaveValue("07810788628");
  expect(getByTestId("select-pizza")).toHaveValue("Peperoni");
});

test("should show errors messages if form doesn't pass validation", () => {
  const history = createBrowserHistory();

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  userEvent.click(getByTestId("form-submit-cta"));

  expect(
    container.querySelectorAll("[data-testid=input-element_error]").length > 0
  ).toBe(true);
});
