import React from "react";

const ReusableInput = ({
  label,
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default ReusableInput;
