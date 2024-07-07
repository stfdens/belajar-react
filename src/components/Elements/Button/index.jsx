import React from "react";

export const Button = (props) => {
  const {
    classname,
    children = "submit",
    onclick = () => {},
    type = "button",
  } = props;
  return (
    <button onClick={onclick} type={type} className={`${classname} rounded-lg`}>
      {children}
    </button>
  );
};
