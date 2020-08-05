import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "../../App";
import store from "../../store/index";
import testingHelpers from "../../helpers/testing";

test("should navigate to `/order` if order cta is clicked", async () => {
  const history = createBrowserHistory(),
    promise = Promise.resolve();

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  let currentPage = getByTestId("home-page");

  expect(currentPage).toBeInTheDocument();

  const orderCta = container.querySelector("[data-testid=redirect-link-order]");

  await fireEvent.click(orderCta);

  currentPage = getByTestId("order-page");

  expect(currentPage).toBeInTheDocument();

  await act(() => promise);
});

test("should not allow navigation to `/home` is form is not valid", async () => {
  const history = createBrowserHistory(),
    promise = Promise.resolve();

  history.push("/order");

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  let currentPage = getByTestId("order-page");

  expect(currentPage).toBeInTheDocument();

  userEvent.click(getByTestId("form-submit-cta"));

  expect(currentPage).toBeInTheDocument();

  await act(() => promise);
});

test("should allow navigation to `/home` is form is valid", async () => {
  const history = createBrowserHistory(),
    promise = Promise.resolve();

  history.push("/order");

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  let currentPage = getByTestId("order-page");

  expect(currentPage).toBeInTheDocument();

  testingHelpers.insertInputValues(userEvent, getByTestId);

  userEvent.click(getByTestId("form-submit-cta"));

  currentPage = getByTestId("home-page");

  expect(currentPage).toBeInTheDocument();

  await act(() => promise);
});

test(`should render the order list on the orders page if:
       - user has navigated to '/order'
       - filled up the form
       - data has passed validation
       - redirect to homepage
       - click on orders from the navigation`, async () => {
  const history = createBrowserHistory(),
    promise = Promise.resolve();

  history.push("/order");

  const { getByTestId, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  let currentPage = getByTestId("order-page");

  expect(currentPage).toBeInTheDocument();

  testingHelpers.insertInputValues(userEvent, getByTestId);

  userEvent.click(getByTestId("form-submit-cta"));

  currentPage = getByTestId("home-page");

  expect(currentPage).toBeInTheDocument();

  userEvent.click(getByTestId("redirect-link-orders"));

  currentPage = getByTestId("orders-page");

  expect(currentPage).toBeInTheDocument();

  const orders = container.querySelectorAll(".accordion-element");

  expect(orders.length > 0).toBe(true);

  await act(() => promise);
});
