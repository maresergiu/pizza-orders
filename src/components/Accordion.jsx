import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AccordionElement from "./AccordionElement.jsx";
import "../scss/components/accordion.scss";

class Accordion extends Component {
  state = {
    activeAccordion: -1,
  };

  setActiveElement = index => {
    this.setState({activeAccordion: index})
  }

  renderOrderList() {
    if (this.props.list.length) {
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

      return <ul className="accordion">{orderList}</ul>;
    } else {
      return (
        <p className="text">
          You haven't made any orders yet. Please go to this{" "}
          <Link data-testid="redirect-link" to="/order">
            page
          </Link>{" "}
          to place your first order.
        </p>
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
