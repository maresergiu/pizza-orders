import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Order from "../../views/Order.jsx";
import store from "../../store/index";

test("should display the Order component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Order />
      </Router>
    </Provider>
  );

  const orderPage = getByTestId("order-page");

  expect(orderPage).toBeInTheDocument();
});

test("should display the GlobalComponents the Order component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Order />
      </Router>
    </Provider>
  );

  const globalcomponents = getByTestId("global-components");

  expect(globalcomponents).toBeInTheDocument();
});

test("should display the PizzaOrderForm the Order component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Order />
      </Router>
    </Provider>
  );

  const pizzaOrderForm = getByTestId("pizza-order-form");

  expect(pizzaOrderForm).toBeInTheDocument();
});
