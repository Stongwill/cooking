import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <h3 className="footer__date">
            @ Strongwill {new Date().getFullYear()} cooking recipes
          </h3>
        </div>
      </div>
    </footer>
  );
}
