import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MainPage = () => {
  const movies = [
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/enough_hhcean.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732263/yellow_hdrpzh.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732263/youpeople_mkwfgj.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732263/avatar_tf7kfr.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732263/traitors_lp549v.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732262/valhalla_ikqkss.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732262/velma_isinib.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732262/sick_u5om6d.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732261/paul_baccsx.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732261/quiet_cfcewy.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732261/otto_u47smj.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732261/gatobotas_fvawlx.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732261/missing_bbel7k.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/hunters_ceovzv.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732261/megan_fmnsfi.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/fear_lpsdxm.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/mandalorian_rs7up0.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/bel_axqvql.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/bloody_rwxbll.jpg",
    "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/enough_hhcean.jpg",
  ];
  const navigate = useNavigate();
  const handleClick = (movie) => {
    if (
      movie ===
      "https://res.cloudinary.com/dzxhdnqm4/image/upload/v1675732260/enough_hhcean.jpg"
    ) {
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
