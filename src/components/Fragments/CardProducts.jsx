import React, { useState } from "react";
import { Button } from "../Elements/Button";

export const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="shadow-lg border flex flex-col w-full max-w-xs justify-center p-5 rounded-xl">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="flex items-center justify-center">
      <img src={image} alt="" className=" h-13" />;
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold my-2 text-center">{title}</h1>
      <p className="italic font-semibold text-sm">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, btn, fungsi, id } = props;
  return (
    <div className="mt-5 flex justify-between gap-3 items-center ">
      <h1 className="font-bold">Rp {price.toLocaleString("id-ID")}</h1>
      <Button classname="bg-slate-500 p-2" onclick={() => fungsi(id)}>
        {btn}
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
