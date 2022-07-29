import React from "react";
import HeroList from "../heroes/HeroList";

const MarvelScreen = () => {
  return (
    <div>
      <HeroList publisher={"Marvel Comics"} />
      <hr />
    </div>
  );
};

export default MarvelScreen;
