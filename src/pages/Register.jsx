import React from "react";
import { RegisterLayouts } from "../components/Layouts/RegisterLayouts";
import { FormRegister } from "../components/Fragments/FormRegister";

export const Register = () => {
  return (
    <RegisterLayouts
      header="Register"
      // text="Register Here"
      btn="Register"
      type="register"
    >
      <FormRegister btn="Register" />
    </RegisterLayouts>
  );
};
