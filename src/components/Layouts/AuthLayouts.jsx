import React from "react";
import { Link } from "react-router-dom";

export const AuthLayouts = (props) => {
  const { header, text, type, children } = props;
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col w-full max-w-sm shadow-xl p-5 rounded-lg ">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{header}</h1>
        <p className="font-medium mb-2 text-slate-500">{text}</p>
        {children}
        <p className="text-center ">
          {type === "login" ? "Dont Have Account? " : "Already Have Account?"}{" "}
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
