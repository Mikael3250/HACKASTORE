import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Contrate um Dev</h2>
          <p>
            no futuro aqui vai vir um pequeno paragrafo sobre serviços de
            programação.
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Contrate agora!</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="../images/dev.jpg" alt="produto" />
        </div>
      </div>
    </header>
  );
}
