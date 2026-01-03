import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>O Melhor Dev do Brasil</h2>
            <p>
              texto com paragrafo longo onde sera implementado posteriormente,
              explicando os beneficios de contratar este Dev
            </p>
            <Link to="/products" className="see-more-btn">
              <span>Contrate agora!</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img
              src="./images/devprincipal.png"
              alt="um dev importante"
              className="dev-exclusive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
