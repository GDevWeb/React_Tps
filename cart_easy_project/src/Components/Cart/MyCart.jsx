import { useState } from "react";

export default function MyCart() {
  // 1.**_Sate_**
  const [myCart, setMyCart] = useState([]);
  // 2.**_Functions_**
  // 3.**_Render_**
  const contentMyCart = myCart.length > 0 ? myCart : "Your cart is empty";
  return (
    <div>
      <h2>My Cart</h2>
      {contentMyCart}
    </div>
  );
}
