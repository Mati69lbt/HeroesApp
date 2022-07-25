import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";
import "./cardStyle.css";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="cardColums animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
