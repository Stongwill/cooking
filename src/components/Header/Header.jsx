import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/">
            <img
              src={logo}
              alt="logo-img"
              className="header__logo"
              width={150}
              height={120}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
