import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import AccordionElement from "../../components/AccordionElement.jsx";
import store from "../../store/index";
import mockedData from "../../helpers/mockedData.js";

const setActiveElement = (index) => index;

test("should display the AccordionElement component", () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion="-1"
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  const accordionElement = container.querySelector(".accordion-element");

  expect(accordionElement).toBeInTheDocument();
});

test("should display the name property in the AccordionElement component", () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={-1}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  const accordionElement = container.querySelector(
      ".accordion-element_order-name"
    ),
    userName = accordionElement.textContent;

  expect(accordionElement).toBeInTheDocument();
  expect(userName.indexOf(mockedData.accordionElement.firstname) > -1).toBe(
    true
  );
  expect(userName.indexOf(mockedData.accordionElement.lastname) > -1).toBe(
    true
  );
});

test("should render the gender property in the AccordionElement component", () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={-1}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  const accordionElementEmail = container.querySelector(
    ".accordion-element_details-email"
  );

  expect(accordionElementEmail).toBeInTheDocument();
});

test("should render the phone property in the AccordionElement component", () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={-1}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  const accordionElementPhone = container.querySelector(
    ".accordion-element_details-phone"
  );

  expect(accordionElementPhone).toBeInTheDocument();
});

test("should render the pizza property in the AccordionElement component", () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={-1}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  const accordionElementPizza = container.querySelector(
    ".accordion-element_details-pizza"
  );

  expect(accordionElementPizza).toBeInTheDocument();
});

test("should show the details if accordion-element_order-name has the active class", async () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={0}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  let orderName = container.querySelector(".accordion-element_order-name")
      .className,
    slideDownDetails = container.querySelector(".react-slidedown");

  expect(orderName.indexOf("active") > -1).toBe(true);
  expect(slideDownDetails.className.indexOf("closed") === -1).toBe(true);
  expect(slideDownDetails).toBeVisible();
});

test("should hide the details if accordion-element_order-name doesn't have the active class", async () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={-1}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  let orderName = container.querySelector(".accordion-element_order-name")
      .className,
    slideDownDetails = container.querySelector(".react-slidedown");

  expect(orderName.indexOf("active") === -1).toBe(true);
  expect(slideDownDetails.className.indexOf("closed") > -1).toBe(true);
});

test("should add the active class to the `.accordion-element_order-name` if activeAccordion is equal with the id", async () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={0}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  let orderName = container.querySelector(".accordion-element_order-name")
    .className;

  expect(orderName.indexOf("active") > -1).toBe(true);
});

test("should not have the active class on the `.accordion-element_order-name` if activeAccordion is not equal with the id", async () => {
  const { container } = render(
    <Provider store={store}>
      <AccordionElement
        activeAccordion={-1}
        data={mockedData.accordionElement}
        setActiveElement={setActiveElement}
      />
    </Provider>
  );

  let orderName = container.querySelector(".accordion-element_order-name")
    .className;

  expect(orderName.indexOf("active") === -1).toBe(true);
});
