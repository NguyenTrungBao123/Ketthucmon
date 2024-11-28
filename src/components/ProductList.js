import React from "react";

const products = [
  {
    id: 1,

    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,

    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,

    img: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
