import React, { useEffect } from "react";
import { CardProducts } from "../components/Fragments/CardProducts";
import { Button } from "../components/Elements/Button";
import { useState } from "react";

export const ProductsPage = () => {
  const data = [
    {
      id: 1,
      nama: "sepatu",
      price: 100000000,
      img: "data:image/jpeg;base64,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",
      description: `            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              asperiores blanditiis nostrum a aliquid modi?`,
    },
    {
      id: 2,
      nama: "bekantan",
      price: 1500000,
      img: "data:image/jpeg;base64,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",
      description: `            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              asperiores blanditiis nostrum a aliquid modi?`,
    },
    {
      id: 3,
      nama: "Babi",
      price: 100000020,
      img: "data:image/jpeg;base64,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",
      description: `            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              necessitatibus officia itaque, eos, saepe odit fugit iusto,
              asperiores blanditiis nostrum a aliquid modi?`,
    },
  ];

  const datas = localStorage.getItem("email");

  const logot = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const [card, setCard] = useState([]);

  const productPage = (id) => {
    // mencari card berdasarkan id
    if (card.find((item) => item.id === id)) {
      // setelah ada diteruskan kedalam setCard dan di mapping lagi untuk menambahkan qty
      setCard(
        card.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCard([...card, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <div className="link">
          <h1>Toko sembako</h1>
        </div>
        <div className="">
          <ul className="flex gap-3 items-center">
            <li>
              <a href="">{datas}</a>
            </li>
            <li>
              <Button classname="bg-black text-white p-3" onclick={logot}>
                Logot
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 p-3 ">
        <div className="grid grid-cols-3 justify-items-center gap-3 w-3/4 h-full ">
          {data.map((e) => (
            <CardProducts key={e.id}>
              <CardProducts.Header image={e.img} />
              <CardProducts.Body title={e.nama}>
                {e.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={e.price}
                btn="Buy Here"
                id={e.id}
                fungsi={productPage}
              />
            </CardProducts>
          ))}
        </div>
        <div className="w-1/2 p-3">
          <h1 className="text-center text-2xl font-bold">Product Here</h1>
          <table className="w-full text-center mt-5 ">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Price</th>
                <th>Jumlah</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {card.map((e) => {
                const dat = data.find((i) => i.id === e.id);
                return (
                  <tr key={e.id}>
                    <td>{dat?.nama}</td>
                    <td>Rp {dat?.price.toLocaleString("id-ID")}</td>
                    <td>{e.qty}</td>
                    <td>Rp {(e.qty * dat?.price).toLocaleString("id-ID")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
