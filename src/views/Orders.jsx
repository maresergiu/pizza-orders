import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
          {Array.isArray(this.props.totalOrders) &&
          this.props.totalOrders.length ? (
            <Accordion list={this.props.totalOrders} />
          ) : (
            this.renderFallback()
          )}
        </div>
        <GlobalComponents />
      </section>
    );
  }

  renderFallback() {
    return (
      <p data-testid="no-order-fallback" className="text">
        You haven't made any orders yet. Please go to this{" "}
        <Link data-testid="redirect-link" to="/order">
          page
        </Link>{" "}
        to place your first order.
      </p>
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
