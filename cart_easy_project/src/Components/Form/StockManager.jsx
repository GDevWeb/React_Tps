import { nanoid } from "nanoid";
import { useState } from "react";
import MyCart from "../Cart/MyCart";
import AddItemForm from "./AddItemForm";
import InitialStock from "./InitialStock";

export default function StockManager() {
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

  const addNewItem = (newItem) => {
    setStateInitialStock((prevState) => [...prevState, newItem]);
  };

  return (
    <>
      <h2>Stock Manager</h2>
      <InitialStock stock={stateInitialStock} />
      <AddItemForm addNewItem={addNewItem} />
      <MyCart />
    </>
  );
}
