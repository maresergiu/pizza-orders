import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showLoader, hideLoader } from "../store/loader/actions";
import GlobalComponents from "../components/GlobalComponents.jsx";
import Accordion from "../components/Accordion.jsx";

class Orders extends Component {
  render() {
    return (
      <section data-testid="orders-page" className="orders-page">
        <div className="holder">
          <h2 className="sub-title">Orders page!</h2>
          <Accordion list={this.props.totalOrders} />
        </div>
        <GlobalComponents />
      </section>
    );
  }
}

MediaList.propTypes = {
  totalOrders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { totalOrders: state.orders.totalOrders };
};

export default connect(mapStateToProps, {
  showLoader,
  hideLoader,
})(Orders);
