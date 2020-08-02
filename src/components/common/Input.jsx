import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="input-element_holder">
      <label htmlFor={name} className="text inline-bl">
        {label}
      </label>
      <input {...rest} name={name} className="input-element" id={name} />
      {error && <div className="input-element_error">{error}</div>}
    </div>
  );
};

export default Input;
