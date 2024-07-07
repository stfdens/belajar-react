import React from "react";

export const Input = (props) => {
  const { type, name, placeholder } = props;

  return (
    <input
      type={type}
      className="text-xm border rounded mb-2 w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      name={name}
      placeholder={placeholder}
    />
  );
};
