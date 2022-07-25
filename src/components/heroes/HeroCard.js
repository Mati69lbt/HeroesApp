import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div
      className="card row gx-5"
      style={{
        maxWidth: 450,
        marginBottom: "10px",
      }}
    >
      <div className="row g-0 col">
        <div className="col-5 col-sm-4 p-3 border bg-light">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img"
          />
        </div>
        <div className="col-7 col-sm-8 p-3 border bg-light">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">
              <small className="text-muted">{alter_ego}</small>
            </p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">{first_appearance}</p>
            <Link to={`/hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
