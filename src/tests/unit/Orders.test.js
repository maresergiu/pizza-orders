import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Orders from "../../views/Orders.jsx";
import { addOrder } from "../../store/orders/actions";
import store from "../../store/index";
import mockedData from "../../helpers/mockedData.js";

test("should display the Order component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Orders />
      </Router>
    </Provider>
  );

  const ordersPage = getByTestId("orders-page");

  expect(ordersPage).toBeInTheDocument();
});

test("should display the GlobalComponents in the Orders component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Orders />
      </Router>
    </Provider>
  );

  const globalcomponents = getByTestId("global-components");

  expect(globalcomponents).toBeInTheDocument();
});

test("should display the fallback message if no order has been placed", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Orders />
      </Router>
    </Provider>
  );

  const noOrderFallback = getByTestId("no-order-fallback");

  expect(noOrderFallback).toBeInTheDocument();
});

test("should display the Accordion in the Orders component", () => {
  store.dispatch(addOrder(mockedData.accordionElement));

  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Orders />
      </Router>
    </Provider>
  );

  const accordionComponent = getByTestId("accordion");

  expect(accordionComponent).toBeInTheDocument();
});
