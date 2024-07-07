import React, { useState } from "react";

function App() {
  const card = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {card.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ;
    </div>
  );
}

export default App;
