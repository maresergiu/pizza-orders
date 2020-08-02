import React from "react";
import PropTypes from "prop-types";
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const AccordionElement = ({ data, activeAccordion, setActiveElement }) => {
  AccordionElement.propTypes = {
    data: PropTypes.object.isRequired,
    activeAccordion: PropTypes.number.isRequired,
    setActiveElement: PropTypes.func.isRequired
  };

  const { id, firstname, lastname, email, phone, pizza } = data;
  const toggleAccordion = () => activeAccordion === id ? false : true

  return (
    <li className="accordion-element">
      <p
        className={id === activeAccordion ? "text accordion-element_order-name active" : "text accordion-element_order-name"}
        onClick={() => setActiveElement(id === activeAccordion ? -1 : id)}>
        {`${firstname} ${lastname}`}</p>
      <SlideDown closed={toggleAccordion()}>
        <ul className="accordion-element_details">
          <li>
            <p className="text">Email: {`${email}`}</p>
          </li>
          <li>
            <p className="text">Phone: {`${phone}`}</p>
          </li>
          <li>
            <p className="text">Pizza order: {`${pizza}`}</p>
          </li>
        </ul>
      </SlideDown>
    </li >
  );
};

export default AccordionElement;
