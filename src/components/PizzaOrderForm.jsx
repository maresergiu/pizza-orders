import React from "react";
import Form from "./common/Form.jsx";
import joiValidation from "../helpers/validation";
import { connect } from "react-redux";
import { addOrder } from "../store/orders/actions";
import { withRouter } from "react-router-dom";
import mockedData from "../helpers/mockedData";

class PizzaOrderForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      pizza: "",
    },
    pizzaArray: mockedData.pizzaArray,
    errors: {},
  };

  schema = { ...joiValidation.schema };
  errorMessage = { ...joiValidation.message };

  doSubmit = () => {
    this.props.addOrder({
      ...this.state.data,
      id: this.props.orders.totalOrders.length,
    });

    this.goToPage("/home");
  };

  goToPage = (path) => {
    this.props.history.push(path);
  };

  render() {
    return (
      <form data-testid="pizza-order-form" className="form">
        {this.renderInput("firstname", "First Name", "Jonh")}
        {this.renderInput("lastname", "Last Name", "Doe")}
        {this.renderInput("email", "Email", "jonh.doe@email.com")}
        {this.renderInput("phone", "Phone", "0781 0788 628")}
        {this.renderSelect("pizza", "Pizza", this.state.pizzaArray)}
        <div className="align-horizontal-right">
          {this.renderButton("Submit")}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  addOrder,
})(withRouter(PizzaOrderForm));
