import { nanoid } from "nanoid";
import { useState } from "react";

import { FaCartPlus, FaDollarSign } from "react-icons/fa";

export default function InitialStock() {
  // 1.***Sate***
  const [stateInitialStock, setStateInitialStock] = useState([
    {
      id: nanoid(8),
      name: "tShirt white collection v",
      price: 4.99,
      quantity: 99,
    },
    {
      id: nanoid(8),
      name: "cargo white collection v",
      price: 8.99,
      quantity: 99,
    },
    {
      id: nanoid(8),
      name: "basket white collection v",
      price: 9.99,
      quantity: 99,
    },
  ]);
  // 2.***Functions***
  const renderStock = stateInitialStock.map((item) => {
    const { id, name, price, quantity } = item;

    return (
      <li key={id}>
        <p>
          Name : <span>{item.name}</span>
        </p>
        <p>
          Price :{" "}
          <span>
            {price} <FaDollarSign />
          </span>
        </p>
        <p>
          Quantité :{" "}
          <span>
            {quantity} <FaDollarSign />
          </span>
        </p>
        <button
          type="button"
          aria-label="button add article to cart"
          // onClick={()=>}
        >
          Add to cart <FaCartPlus />
        </button>
      </li>
    );
  });
  // 3.***Render***
  return (
    <>
      <h2>initialStock</h2>
      {renderStock}
    </>
  );
}
