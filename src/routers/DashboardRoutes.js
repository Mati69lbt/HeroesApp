import React from "react";
import { Navbar } from "../components/ul/NavBar";
import { Route, Routes } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import DcScrren from "../components/dc/DcScrren";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = (props) => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />}></Route>
          <Route path="/hero/:heroeId" element={<HeroesScreen />}></Route>
          <Route path="/dc" element={<DcScrren />}></Route>
          <Route path="/search" element={<SearchScreen />}></Route>
          {/* <Redirect to="/marvel" /> */}
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
