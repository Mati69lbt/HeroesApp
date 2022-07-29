import React, { useMemo } from "react";
import queryString from "query-string";
import useForm from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroByname";

const SearchScreen = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const navigate = useNavigate();

  const [formValues, HandleInputChange] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFilteres = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <div className="row" style={{ alignContent: "center" }}>
        {/* <div className="col-5"> */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Find your hero"
            className="form-control"
            name="searchText"
            value={searchText}
            onChange={HandleInputChange}
            autoComplete="off"
            style={{ marginBottom: "25px", textAlign: "center" }}
          />
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
              style={{ marginBottom: "25px" }}
            >
              {" "}
              Search
            </button>
          </div>
        </form>
        {/* </div> */}
        {/* <div className="col-7"> */}
        <h3>Results</h3>
        <hr />
        {q === "" && <div className="alert alert-info">Search a hero</div>}
        {q !== "" && heroesFilteres.length === 0 && (
          <div className="alert alert-info">There is no a hero with {q} </div>
        )}
        {heroesFilteres.map((hero) => (
          <div
            className="centro"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <HeroCard key={hero.id} {...hero} style />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SearchScreen;
