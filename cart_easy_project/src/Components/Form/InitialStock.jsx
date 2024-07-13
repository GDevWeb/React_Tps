import { FaCartPlus, FaDollarSign } from "react-icons/fa";

export default function InitialStock({ stock = [], handleAddArticle }) {
  const renderStock = stock.map((item) => {
    const { id, name, price, quantity } = item;

    return (
      <li key={id}>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Price:{" "}
          <span>
            {price} <FaDollarSign />
          </span>
        </p>
        <p>
          Quantité:{" "}
          <span>
            {quantity} <FaDollarSign />
          </span>
        </p>
        <button
          type="button"
          aria-label="button add article to cart"
          onClick={handleAddArticle}
        >
          Add to cart <FaCartPlus />
        </button>
      </li>
    );
  });

  return (
    <>
      <h2>Initial Stock</h2>
      <ul>{renderStock}</ul>
    </>
  );
}
