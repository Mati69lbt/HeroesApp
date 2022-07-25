import React from "react";
import HeroList from "../heroes/HeroList";

const DcScrren = () => {
  return (
    <div>
      <h1>DC Screen</h1>
      <HeroList publisher={"DC Comics"} />
      <hr />
    </div>
  );
};

export default DcScrren;
