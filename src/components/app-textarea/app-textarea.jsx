import React from "react";

const ReusableTextarea = ({
  label,
  id,
  value,
  placeholder,
  onChange,
  rows = 3,
  required = false,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        className="form-control"
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default ReusableTextarea;
