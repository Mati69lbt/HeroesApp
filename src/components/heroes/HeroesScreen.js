import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";

const HeroesScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5">
      <h1>HeroesScreen</h1>
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5>Chararters</h5>
        <p> {characters}</p>
        <button className="btn btn-outline-info" onClick={() => navigate(-1)}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroesScreen;
