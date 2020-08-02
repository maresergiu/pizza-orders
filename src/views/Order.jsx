import React, { Component } from "react";
import GlobalComponents from "../components/GlobalComponents.jsx";
import PizzaOrderForm from "../components/PizzaOrderForm.jsx";
import "../scss/views/order.scss";

class Order extends Component {
  render() {
    return (
      <section data-testid="order-page" className="order-page">
        <div className="holder">
          <h2 className="sub-title">Create a pizza order</h2>
          <PizzaOrderForm />
        </div>
        <GlobalComponents />
      </section>
    );
  }
}

export default Order;