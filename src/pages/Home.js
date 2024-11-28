import React, { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState([]);

  // Hàm thêm món vào giỏ
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} đã được thêm vào giỏ hàng!`);
  };

  // Hàm thanh toán (ví dụ đơn giản)
  const checkout = () => {
    if (cart.length > 0) {
      alert(`Bạn đã thanh toán thành công với ${cart.length} món ăn!`);
    } else {
      alert("Giỏ hàng của bạn trống!");
    }
  };

  return (
    <div className="home">
      <div className="banner">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Banner Thế Giới Ăn Vặt"
        />
        <div className="banner-text">
          <h1>Chào mừng đến với Thế Giới Ăn Vặt</h1>
          <p>Khám phá những món ăn hấp dẫn và đồ uống thơm ngon!</p>
        </div>
      </div>
      <div className="home-content">
        <h2>Món ăn nổi bật</h2>
        <div className="featured-items">
          {/* Món ăn 1 */}
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Bánh tráng trộn" />
            <h3>Bánh tráng trộn</h3>
            <p>15,000 VNĐ</p>
            <button
              onClick={() =>
                addToCart({ name: "Bánh tráng trộn", price: 15000 })
              }
            >
              Thêm vào giỏ
            </button>
            <button onClick={checkout}>Thanh toán</button>
          </div>
          {/* Món ăn 2 */}
          <div className="item">
            <img
              src="https://via.placeholder.com/150"
              alt="Trà sữa trân châu"
            />
            <h3>Trà sữa trân châu</h3>
            <p>25,000 VNĐ</p>
            <button
              onClick={() =>
                addToCart({ name: "Trà sữa trân châu", price: 25000 })
              }
            >
              Thêm vào giỏ
            </button>
            <button onClick={checkout}>Thanh toán</button>
          </div>
          {/* Món ăn 3 */}
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Phở bò tái" />
            <h3>Phở bò tái</h3>
            <p>50,000 VNĐ</p>
            <button
              onClick={() => addToCart({ name: "Phở bò tái", price: 50000 })}
            >
              Thêm vào giỏ
            </button>
            <button onClick={checkout}>Thanh toán</button>
          </div>
          {/* Món ăn 4 */}
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Bánh mì trứng" />
            <h3>Bánh mì trứng</h3>
            <p>20,000 VNĐ</p>
            <button
              onClick={() => addToCart({ name: "Bánh mì trứng", price: 20000 })}
            >
              Thêm vào giỏ
            </button>
            <button onClick={checkout}>Thanh toán</button>
          </div>
          {/* Món ăn 5 */}
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Xoài lắc" />
            <h3>Xoài lắc</h3>
            <p>18,000 VNĐ</p>
            <button
              onClick={() => addToCart({ name: "Xoài lắc", price: 18000 })}
            >
              Thêm vào giỏ
            </button>
            <button onClick={checkout}>Thanh toán</button>
          </div>
          {/* Món ăn 6 */}
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Cháo sườn" />
            <h3>Cháo sườn</h3>
            <p>30,000 VNĐ</p>
            <button
              onClick={() => addToCart({ name: "Cháo sườn", price: 30000 })}
            >
              Thêm vào giỏ
            </button>
            <button onClick={checkout}>Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
