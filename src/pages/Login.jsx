import React from "react";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";
import { FormLogin } from "../components/Fragments/FormLogin";

export const Login = () => {
  return (
    <AuthLayouts
      header="Login"
      text="wellcome back, please enter your detail"
      type="login"
      btn="Login"
    >
      <FormLogin btn="Login" />
    </AuthLayouts>
  );
};
