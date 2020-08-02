import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="input-element_holder">
      <label htmlFor={name} className="text inline-bl">
        {label}
      </label>
      <select name={name} id={name} {...rest} className="input-element">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="input-element_error">{error}</div>}
    </div>
  );
};

export default Select;
