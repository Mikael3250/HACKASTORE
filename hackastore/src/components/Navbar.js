import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
            <div className="nav">
          <div className="inner-content">
            <h1 className="logo">
            HACKA<span>STORE</span>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Produtos</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/Contatos">Contatos</Link>
              </li>
            </ul>
          </nav>
          <div className="navs-icon-container">
            <div className="search-input-container">
              <input type="search" placeholder="Pesquisar"/>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <button className="shopping-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="products-count">0</div>
            </button>
            <button className="menu-button"><FontAwesomeIcon icon={faBars}/></button>
          </div>
          </div>
        </div>
  )
}
