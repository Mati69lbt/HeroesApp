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
      <h1>SearchScreen</h1>
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={HandleInputChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              {" "}
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFilteres.length === 0 && (
            <div className="alert alert-info">There is no a hero with {q} </div>
          )}
          {heroesFilteres.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
