import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Accordion from "../../components/Accordion.jsx";
import store from "../../store/index";
import { addOrder } from "../../store/orders/actions";
import mockedData from "../../helpers/mockedData.js";

test("should display the Accordion component", () => {
  store.dispatch(addOrder(mockedData.accordionElement));

  const storeData = store.getState();

  const history = createBrowserHistory();

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Accordion list={storeData.orders.totalOrders} />
      </Router>
    </Provider>
  );

  const accordionComponent = getByTestId("accordion");

  expect(accordionComponent).toBeInTheDocument();
});

test("should display 1 AccordionElements", () => {
  const storeData = store.getState();

  const history = createBrowserHistory();

  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <Accordion list={storeData.orders.totalOrders} />
      </Router>
    </Provider>
  );

  const accordionElements = container.querySelectorAll(".accordion-element");

  expect(accordionElements.length).toBe(1);
});
