import React from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div>
        <div style={{ flex: 1 }}>
          <img
            src="https://res.cloudinary.com/dzxhdnqm4/image/upload/v1669581903/jlfnrwqb6qp8n96a2rcm.jpg"
            alt=""
            className="logo"
            onClick={() => {
              handleClick();
            }}
          />
          <div className="div-buscador">
            <input type="text" placeholder="Buscar pelicula..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="src/assets/primer.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>

              <div class="carousel-item">
                <img
                  src="src/assets/segundo.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* <img className="img-stackoverflow" src="Stack_Overflow_logo.svg" alt="" /> */}
      <div className="container">
        <div className="div-links" style={{ flex: 3 }}>
          <button className="button">Series de tv</button>
          <button className="button">Series de paga</button>
          <button className="button">Ver Reviews</button>
          <button className="button"> Calificar reviews</button>
          <button className="button">Ultimos estrenos</button>
        </div>
        <div className="div-buttons">
          <button className="button">Iniciar sesión</button>
          <button className="button">Registrarse</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
