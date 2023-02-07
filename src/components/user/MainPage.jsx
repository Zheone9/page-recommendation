import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MainPage = () => {
  const movies = [
    "elvis.jpeg",
    "avatar.jpeg",
    "bel.jpeg",
    "bloody.jpeg",
    "enough.jpeg",
    "fear.jpeg",
    "gatobotas.jpeg",
    "hunters.jpeg",
    "mandalorian.jpeg",
    "megan.jpeg",
    "missing.jpeg",
    "otto.jpeg",
    "paul.jpeg",
    "quiet.jpeg",
    "sick.jpeg",
    "traitors.jpeg",
    "valhalla.jpeg",
    "velma.jpeg",
    "yellow.jpeg",
    "youpeople.jpeg",
  ];
  const navigate = useNavigate();
  const handleClick = (movie) => {
    if (movie === "elvis.jpeg") {
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
