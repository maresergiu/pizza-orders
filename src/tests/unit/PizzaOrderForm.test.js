import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import PizzaOrderForm from "../../components/PizzaOrderForm.jsx";
import store from "../../store/index";

test("should display the PizzaOrderForm component", () => {
  const history = createBrowserHistory();

  history.push("/order");

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  expect(getByTestId("pizza-order-form")).toBeInTheDocument();
});

test("should display the first name input in the PizzaOrderForm", () => {
  const history = createBrowserHistory();

  history.push("/order");

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  expect(getByTestId("input-element-firstname")).toBeInTheDocument();
});

test("should display the last name input in the PizzaOrderForm", () => {
  const history = createBrowserHistory();

  history.push("/order");

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  expect(getByTestId("input-element-lastname")).toBeInTheDocument();
});

test("should display the email input in the PizzaOrderForm", () => {
  const history = createBrowserHistory();

  history.push("/order");

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  expect(getByTestId("input-element-email")).toBeInTheDocument();
});

test("should display the phone input in the PizzaOrderForm", () => {
  const history = createBrowserHistory();

  history.push("/order");

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  expect(getByTestId("input-element-phone")).toBeInTheDocument();
});

test("should display the pizza select in the PizzaOrderForm", () => {
  const history = createBrowserHistory();

  history.push("/order");

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <PizzaOrderForm />
      </Router>
    </Provider>
  );

  expect(getByTestId("select-pizza")).toBeInTheDocument();
});
