import React from "react";
import Form from "./common/Form.jsx";
import joiValidation from "../helpers/validation";

class PizzaOrderForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    },
    errors: {},
    pizzaArray: [
      {
        _id: "1",
        name: "Peperoni",
      },
      {
        _id: "2",
        name: "Mamaia",
      },
      {
        _id: "3",
        name: "Formagio",
      },
      {
        _id: "4",
        name: "Transilvania",
      },
      {
        _id: "5",
        name: "Dracula",
      }
    ],
  };

  schema = { ...joiValidation.schema };
  errorMessage = { ...joiValidation.message };

  doSubmit = () => {
    // functionality after the submit fucntionality
    console.log("Submited");
  };

  render() {
    return (
      <form className="form">
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

export default PizzaOrderForm;
