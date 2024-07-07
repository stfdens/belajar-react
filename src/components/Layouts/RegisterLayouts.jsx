import React from "react";
import { Button } from "../Elements/Button";
import { Link } from "react-router-dom";

export const RegisterLayouts = (props) => {
  const { header, text, type, children } = props;

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="p-5 rounded-lg shadow-lg w-full max-w-sm  flex flex-col">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{header}</h1>
        <p className="font-medium mb-2 text-slate-500">{text}</p>
        {children}
        <p className="text-center">
          {type === "register"
            ? "Already Have Account? "
            : "Dont Have Account?"}
          <Navigation type={type} />
        </p>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <Link to={"/register"} className="text-cyan-500">
        Register Here
      </Link>
    );
  } else {
    return (
      <Link to={"/login"} className="text-cyan-500">
        Login Here
      </Link>
    );
  }
};
