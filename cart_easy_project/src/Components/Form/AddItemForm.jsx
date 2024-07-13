import { nanoid } from "nanoid";
import { useState } from "react";

export default function AddItemForm({ addNewItem }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
  });

  const [errorMessageInput, setErrorMessageInput] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, quantity } = formData;

    try {
      if (name.trim() === "" || name.length < 3 || name.length > 64) {
        setErrorMessageInput((prev) => ({
          ...prev,
          name: `Please input a valid string for new item. Item must contain at least 3 characters minimum and 64 characters maximum`,
        }));
        throw new Error(
          `Please input a valid string for new item. Item must contain at least 3 characters minimum and 64 characters maximum`
        );
      }

      const priceItem = parseFloat(price);
      if (isNaN(priceItem) || priceItem <= 0) {
        setErrorMessageInput((prev) => ({
          ...prev,
          price: "Please, input a valid price in number greater than 0!",
        }));
        throw new Error(
          "Please, input a valid price in number greater than 0!"
        );
      }

      const quantityItem = parseInt(quantity);
      if (isNaN(quantityItem) || quantityItem <= 0 || quantityItem > 99) {
        setErrorMessageInput((prev) => ({
          ...prev,
          quantity: "Please input a valid quantity, from 1 to 99",
        }));
        throw new Error("Please input a valid quantity, from 1 to 99");
      }

      const newItem = {
        id: nanoid(8),
        name: name,
        price: priceItem,
        quantity: quantityItem,
      };

      addNewItem(newItem);

      setFormData({
        id: "",
        name: "",
        price: "",
        quantity: "",
      });

      setErrorMessageInput({
        name: "",
        price: "",
        quantity: "",
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <form id="addItemForm" onSubmit={handleSubmit}>
      <h3>Add item into the stock</h3>
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="input the name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errorMessageInput.name && (
          <p className="errorMessage">{errorMessageInput.name}</p>
        )}
      </div>

      <div className="formGroup">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="input the price"
          value={formData.price}
          onChange={handleInputChange}
        />
        {errorMessageInput.price && (
          <p className="errorMessage">{errorMessageInput.price}</p>
        )}
      </div>
      <div className="formGroup">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="input the quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        {errorMessageInput.quantity && (
          <p className="errorMessage">{errorMessageInput.quantity}</p>
        )}
      </div>
      <button type="submit">Add item</button>
    </form>
  );
}
