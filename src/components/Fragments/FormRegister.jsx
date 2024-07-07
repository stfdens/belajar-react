import React from "react";
import { InputForm } from "../Input";
import { Button } from "../Elements/Button";

export const FormRegister = (props) => {
  const { btn } = props;

  return (
    <form action="">
      <InputForm
        htmlFor="Username"
        title="Username"
        type="Username"
        placeholder="Username"
      ></InputForm>
      <InputForm
        htmlFor="Email"
        title="Email"
        type="Email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        htmlFor="Password"
        title="Password"
        type="Password"
        placeholder="*****"
      ></InputForm>
      <InputForm
        htmlFor="Re-Password"
        title="Re-Password"
        type="Re-Password"
        placeholder="*****"
      ></InputForm>
      <Button classname="bg-cyan-700 p-4 mt-3 mb-1 w-full">{btn}</Button>
    </form>
  );
};
