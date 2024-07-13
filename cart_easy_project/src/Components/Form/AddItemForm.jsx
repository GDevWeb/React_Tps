import { nanoid } from "nanoid";
import { useState } from "react";

export default function AddItemForm() {
  // 1.***_Sate_***
  const [formData, setFormData] = useState({
    id: nanoid(8),
    name: "",
    price: "",
    quantity: "",
  });

  // state the different inputs :
  const [errorMessageInput, setErrorMessageInput] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  // 2.***_Functions_***

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form prevent Submitting! ");
  };

  // 3.***_Render_***

  return (
    <form id="addItemForm" onSubmit={handleSubmit}>
      <h2>Handle stock</h2>
      <h3>Add item into the stock</h3>
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="input the name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {errorMessageInput.name && <p className="errorMessage"></p>}
      </div>
      <div className="formGroup">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="input the price"
          value={formData.price}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {errorMessageInput.price && <p className="errorMessage"></p>}
      </div>
      <div className="formGroup">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="input the quantity"
          value={formData.quantity}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {errorMessageInput.quantity && <p className="errorMessage"></p>}
      </div>
      <button type="submit" aria-label>
        Add item
      </button>
    </form>
  );
}
