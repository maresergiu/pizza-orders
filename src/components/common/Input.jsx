import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="input-element_holder">
      <label htmlFor={name} className="text inline-bl">
        {label}
      </label>
      <input
        {...rest}
        data-testid={`input-element-${name}`}
        name={name}
        className="input-element"
        id={name}
      />
      {error && (
        <div data-testid="input-element_error" className="input-element_error">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
