import React, { Component } from "react"
import { connect } from "react-redux"
import { addOrder } from "../store/orders/actions"
import GlobalComponents from "../components/GlobalComponents.jsx"
import PizzaOrderForm from "../components/PizzaOrderForm.jsx"

class Order extends Component {
  render() {
    return (
      <section data-testid="order-page" className="order-page">
        <div className="holder">
          <h2 className="sub-title">Create an order</h2>
          <PizzaOrderForm />
        </div>
        <GlobalComponents />
      </section>
    )
  }

  saveOrder() {
    this.props.addOrder({ name: "test name" })
  }

  componentDidMount() {
    this.saveOrder();
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {
  addOrder
})(Order)
