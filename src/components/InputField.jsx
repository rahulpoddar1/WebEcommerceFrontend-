import React from "react";

const InputField = ({ label, name, type = "text", handleChange, handleBlur, value, error, touched }) => (
  <div className="mb-4">
    <label className="block font-medium mb-1 capitalize">{label}</label>
    <input
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      className={`w-full p-2 border rounded ${error && touched ? "border-red-500" : "border-gray-300"}`}
    />
    {error && touched && <div className="text-red-500 text-sm mt-1">{error}</div>}
  </div>
);

export default InputField;
