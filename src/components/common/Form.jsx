import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input.jsx";
import Select from "./Select.jsx";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    renderButton(label) {
        return <button className="cta" onClick={this.validate()}>{label}</button>;
    }

    renderSelect = (name, label, options) => {
        const { data, errors } = this.state;

        return (
            <Select name={name} value={data[name]} label={label} options={options} onChange={this.handleChange} error={errors[name]} />
        );
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;

        return (
            <Input name={name}
                value={data[name]}
                label={label}
                type={type}
                onChange={this.handleChange}
                errors={errors[name]} />
        );
    }

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data },
            errors = { ...this.state.errors },
            errorMessage = this.validateProperty(input);

        if (errorMessage) {
            errors[input.name] = errorMessage;
        } else {
            delete errors[input.name];
        }

        data[input.name] = input.value;

        this.setState({ data, errors });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if (errors) return;

        this.doSubmit();
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value },
            schema = { [name]: this.schema[name] },
            { error } = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;
    }

    validate = () => {
        const options = { abortEarly: false },
            result = Joi.validate(this.state.data, this.schema, options);

        const errors = {}

        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }

        return errors;
    }
}

export default Form;