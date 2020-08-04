import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionElement from "./AccordionElement.jsx";
import "../scss/components/accordion.scss";

class Accordion extends Component {
  state = {
    activeAccordion: -1,
  };

  setActiveElement = (index) => {
    this.setState({ activeAccordion: index });
  };

  renderOrderList() {
    if (Array.isArray(this.props.list) && this.props.list.length) {
      const orderList = this.props.list.map((el, index) => {
        return (
          <AccordionElement
            key={`${el.name}-${index}`}
            activeAccordion={this.state.activeAccordion}
            data={el}
            setActiveElement={this.setActiveElement}
          />
        );
      });

      return (
        <ul data-testid="accordion" className="accordion">
          {orderList}
        </ul>
      );
    }
  }

  render() {
    return this.renderOrderList();
  }
}

Accordion.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Accordion;
