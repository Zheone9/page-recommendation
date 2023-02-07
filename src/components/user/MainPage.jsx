import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MainPage = () => {
  const movies = [
    "elvis.JPEG",
    "avatar.JPEG",
    "bel.JPEG",
    "bloody.JPEG",
    "enough.JPEG",
    "fear.JPEG",
    "gatobotas.JPEG",
    "hunters.JPEG",
    "mandalorian.JPEG",
    "megan.JPEG",
    "missing.JPEG",
    "otto.JPEG",
    "paul.JPEG",
    "quiet.JPEG",
    "sick.JPEG",
    "traitors.JPEG",
    "valhalla.JPEG",
    "velma.JPEG",
    "yellow.JPEG",
    "youpeople.JPEG",
  ];
  const navigate = useNavigate();
  const handleClick = (movie) => {
    if (movie === "elvis.JPEG") {
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
