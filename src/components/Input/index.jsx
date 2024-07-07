import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";

export const InputForm = (props) => {
  const { title, htmlFor, type, placeholder, name } = props;
  return (
    <div className="">
      <Label htmlFor={htmlFor}>{title}</Label>
      <Input type={type} name={name} placeholder={placeholder}></Input>
    </div>
  );
};
