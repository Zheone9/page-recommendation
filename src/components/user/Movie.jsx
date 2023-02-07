import React from "react";
import ReactStars from "react-rating-stars-component";

const Movie = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="container">
      <img src="src/assets/elvis-large.jpg" alt="" />
      <div className="descripcion">
        <h1>Elvis (2022)</h1>
        <h3>Sinópsis</h3>
        <p>
          Filme biográfico en torno a la vida y la música de Elvis Presley
          (Austin Butler), enfocadas de su compleja relación con su misterioso
          agente: el coronel Tom Parker (Hanks). La película ahonda en la
          complicada dinámica entre Presley y Parker a lo largo de más de 20
          años, desde el ascenso a la fama de Presley hasta su estrellato sin
          precedentes. Todo ello tras el telón de la evolución cultural y la
          madurez social en Estados Unidos. En el centro de ese viaje está una
          de las personas más importantes e influyentes en la vida de Elvis,
          Priscilla Presley (Olivia DeJonge).
        </p>
        <hr />
        <div className="d-flex">
          <b> Reviews de criticos especializados</b>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            value={5}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <p>
          "Elvis es una obra maestra del cine que captura magistralmente la vida
          y carrera del rey del rock and roll. La dirección y el reparto son
          impecables, y la música, simplemente espectacular. Sin duda, una
          película que ningún amante del cine y la música debería perderse."
          <br />
          <i>
            <b>Roger Ebert</b>
          </i>
        </p>
        <p>
          "Elvis es una película impactante que aborda la vida y el legado del
          icónico músico de una manera nueva y fresca. La química entre los
          actores y la producción impecable hacen de esta película una
          experiencia emocionante y emocionante para todos los fanáticos de
          Elvis Presley." <br />
          <i>
            <b>A.O. Scott</b>
          </i>
        </p>
        <p>
          "Esta película es un retrato honesto y conmovedor de una de las
          figuras más influyentes y queridas de la música popular. Con una
          interpretación sólida por parte del reparto y un enfoque preciso en la
          vida y carrera de Elvis, esta película es una joya para todos los
          amantes de la música y el cine."
        </p>

        <i>
          <b>Richard Roeper</b>
        </i>
        <div className="d-flex">
          <b> Reviews de espectadores</b>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            value={2}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <hr />
        <p>
          "Vi la película Elvis y debo decir que fue una experiencia bastante
          regular. La dirección y el reparto estuvieron bien, pero no sentí que
          la película lograra capturar realmente el espíritu y la energía de
          Elvis. Algunas partes eran emocionantes, pero en general, no sentí que
          fuera una película realmente memorable."
          <br />
          <i>
            <b>cinefilo_7626</b>
          </i>
        </p>
        <p>
          "Vi la película Elvis y estuvo bien. No es la mejor película sobre
          Elvis que he visto, pero tampoco es la peor. La música estuvo genial y
          algunos de los actores hicieron un buen trabajo, pero en general, la
          trama no me pareció muy interesante. Si eres fanático de Elvis, puede
          que te guste, pero si no estás familiarizado con su música,
          probablemente no encuentres la película muy emocionante."
          <br />
        </p>
        <i>
          <b>miguel26532</b>
        </i>
        <hr />
        <h5> Para escribir tu reseña primero debes estar registrado.</h5>
      </div>
    </div>
  );
};

export default Movie;
