import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="http://anvat.langsonweb.com/wp-content/uploads/2020/06/logo-anvat1.png"
            alt="Ăn Vặt Ngon"
            style={{ height: "50px" }}
          />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Trang Chủ</Link>
        <Link to="/about">Giới Thiệu</Link>
        <Link to="/do-an-vat">Đồ Ăn Vặt</Link>
        <Link to="/do-an-dem">Đồ Ăn Đêm</Link>
        <Link to="/do-uong">Đồ Uống</Link>
        <Link to="/cart">Giỏ Hàng ({cartCount})</Link>
        <Link to="/contact">Liên Hệ</Link>
      </nav>
    </header>
  );
};

export default Header;
