import React from "react";
import { InputForm } from "../Input";
import { Button } from "../Elements/Button";

export const FormLogin = (props) => {
  const { btn } = props;

  const HandleLogin = (e) => {
    e.preventDefault();
    // console.log(e.target.password.value);
    const formdata = new FormData(e.target);
    const email = formdata.get("email");
    const password = formdata.get("password");

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log({ email, password });
    window.location.href = "/products";
  };

  return (
    <form onSubmit={HandleLogin}>
      <InputForm
        htmlFor="email"
        title="email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        htmlFor="password"
        title="password"
        type="password"
        name="password"
        placeholder="**********"
      />
      <Button classname="bg-cyan-700 p-4 mt-3 mb-1 w-full" type="submit">
        {btn}
      </Button>
    </form>
  );
};
