import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <div>
      <h1>Giỏ Hàng</h1>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelectItem(item.id)}
              />
              <img src={item.img} alt={item.name} width={50} height={50} />
              <span>{item.name}</span>
              <p>
                {item.price.toLocaleString()} VNĐ x {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
      <Link
        to="/checkout"
        state={{
          selectedItems: cartItems.filter((item) =>
            selectedItems.includes(item.id)
          ),
        }}
      >
        <button disabled={selectedItems.length === 0}>Thanh Toán</button>
      </Link>
    </div>
  );
};

export default Cart;
