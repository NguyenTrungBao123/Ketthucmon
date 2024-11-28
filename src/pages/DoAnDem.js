import React from "react";

const nightFoods = [
  {
    id: 1,
    name: "Cháo sườn",
    price: "35,000 VNĐ",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Phở bò tái",
    price: "50,000 VNĐ",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bánh mì trứng",
    price: "20,000 VNĐ",
    img: "https://via.placeholder.com/150",
  },
];

const DoAnDem = () => {
  return (
    <div>
      <h1>Đồ Ăn Đêm</h1>
      <div className="product-list">
        {nightFoods.map((food) => (
          <div key={food.id} className="product-card">
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoAnDem;
