// src/pages/DoAnVat.js
import React from "react";

const snacks = [
  {
    id: 1,
    name: "Bánh tráng trộn",
    price: 15000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Khô gà lá chanh",
    price: 30000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Xoài lắc",
    price: 20000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Trà sữa trân châu",
    price: 25000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Bánh mì trứng",
    price: 20000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Cháo sườn",
    price: 30000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Cháo sườn",
    price: 30000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Cháo sườn",
    price: 30000,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Cháo sườn",
    price: 30000,
    img: "https://via.placeholder.com/150",
  },
];

const DoAnVat = ({ addToCart }) => {
  return (
    <div>
      <h1>Đồ Ăn Vặt</h1>
      <div className="product-list">
        {snacks.map((snack) => (
          <div key={snack.id} className="product-card">
            <img src={snack.img} alt={snack.name} />
            <h3>{snack.name}</h3>
            <p>{snack.price.toLocaleString()} VNĐ</p>
            <button onClick={() => addToCart(snack)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoAnVat;
