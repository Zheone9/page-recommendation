import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MainPage = () => {
  const movies = [
    "src/assets/elvis.JPEG",
    "src/assets/avatar.JPEG",
    "src/assets/bel.JPEG",
    "src/assets/bloody.JPEG",
    "src/assets/enough.JPEG",
    "src/assets/fear.JPEG",
    "src/assets/gatobotas.JPEG",
    "src/assets/hunters.JPEG",
    "src/assets/mandalorian.JPEG",
    "src/assets/megan.JPEG",
    "src/assets/missing.JPEG",
    "src/assets/otto.JPEG",
    "src/assets/paul.JPEG",
    "src/assets/quiet.JPEG",
    "src/assets/sick.JPEG",
    "src/assets/traitors.JPEG",
    "src/assets/valhalla.JPEG",
    "src/assets/velma.JPEG",
    "src/assets/yellow.JPEG",
    "src/assets/youpeople.JPEG",
  ];
  const navigate = useNavigate();
  const handleClick = (movie) => {
    if (movie === "src/assets/elvis.JPEG") {
      navigate("/elvis");
    }
  };

  return (
    <div className="main">
      <div className="movie-grid">
        {movies.map((movie) => (
          <img
            onClick={() => {
              handleClick(movie);
            }}
            className="movie-item animate__bounceIn"
            src={movie}
            alt="movie"
            key={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
