import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";

test("should load the home page if page `/` is loaded", () => {
  const history = createBrowserHistory();

  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const currentPage = container.querySelector("[data-testid=home-page]")
    .className;

  expect(currentPage.indexOf("home-page") > -1).toBe(true);
});

test("should load the home page if page `/home` is loaded", () => {
  const history = createBrowserHistory();

  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const currentPage = container.querySelector("[data-testid=home-page]")
    .className;

  expect(currentPage.indexOf("home-page") > -1).toBe(true);
});

test("should load the order page if page `/order` is loaded", () => {
  const history = createBrowserHistory();
  history.push("/order");

  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const currentPage = container.querySelector("[data-testid=order-page]")
    .className;

  expect(currentPage.indexOf("order-page") > -1).toBe(true);
});

test("should load the orders page if page `/orders` is loaded", () => {
  const history = createBrowserHistory();
  history.push("/orders");

  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const currentPage = container.querySelector("[data-testid=orders-page]")
    .className;

  expect(currentPage.indexOf("orders-page") > -1).toBe(true);
});

test("should load the error page if page is not available", () => {
  const history = createBrowserHistory();
  history.push("/test");

  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const currentPage = container.querySelector("[data-testid=error-page]")
    .className;

  expect(currentPage.indexOf("error-page") > -1).toBe(true);
});
