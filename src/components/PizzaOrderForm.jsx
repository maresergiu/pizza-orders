import React from "react";
import Joi from "joi-browser";
import Form from './common/Form.jsx'

class PizzaOrderForm extends Form {
    state = {
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
    }

    // schema = {
    //     firstname: Joi.string().required().label('First name'),
    //     lastname: Joi.string().required().label('Last name'),
    //     email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
    //     phone: Joi.string().min(10).required().label('Phone')
    // }

    schema = {
        firstname: Joi.string().required().label('First name'),
        lastname: Joi.string().required().label('Last name'),
        email: Joi.string().required().label('Email'),
        phone: Joi.string().required().label('Phone')
    }

    doSubmit = () => {
        // functionality after the submit fucntionality
        this.validate();

        console.log(this)

        console.log('Submited');
    }

    render() {
        const { data, errors } = this.state;

        return (
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('firstname', 'First Name')}
                    {this.renderInput('lastname', 'Last Name')}
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('phone', 'Phone')}
                    {this.renderButton('Submit')}
                </form>
            </div>);
    }
}

export default PizzaOrderForm;