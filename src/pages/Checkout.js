import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];

  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Thanh Toán</h1>
      {selectedItems.length === 0 ? (
        <p>Không có sản phẩm nào để thanh toán.</p>
      ) : (
        <div>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.name} width={50} height={50} />
                <span>{item.name}</span>
                <p>
                  {item.price.toLocaleString()} VNĐ x {item.quantity}
                </p>
              </li>
            ))}
          </ul>
          <h2>Tổng Thanh Toán: {totalAmount.toLocaleString()} VNĐ</h2>
          <button onClick={() => alert("Thanh toán thành công!")}>
            Xác nhận thanh toán
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
