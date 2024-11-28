import React from "react";

const drinks = [
  {
    id: 1,
    name: "Trà sữa trân châu",
    price: "25,000 VNĐ",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Cà phê sữa đá",
    price: "20,000 VNĐ",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Nước ép cam",
    price: "30,000 VNĐ",
    img: "https://via.placeholder.com/150",
  },
];

const DoUong = () => {
  return (
    <div>
      <h1>Đồ Uống</h1>
      <div className="product-list">
        {drinks.map((drink) => (
          <div key={drink.id} className="product-card">
            <img src={drink.img} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p>{drink.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoUong;
