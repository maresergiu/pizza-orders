import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../../views/Home.jsx";
import store from "../../store/index";

test("should display the Home component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Home />
      </Router>
    </Provider>
  );

  const homePage = getByTestId("home-page");

  expect(homePage).toBeInTheDocument();
});

test("should display the GlobalComponents the Home component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Home />
      </Router>
    </Provider>
  );

  const globalcomponents = getByTestId("global-components");

  expect(globalcomponents).toBeInTheDocument();
});

test("should display the Navigation in the Home component", () => {
  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Home />
      </Router>
    </Provider>
  );

  const navigation = getByTestId("navigation");

  expect(navigation).toBeInTheDocument();
});
