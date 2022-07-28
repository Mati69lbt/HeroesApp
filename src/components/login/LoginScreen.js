import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./log.css";

const LoginScreen = () => {
  const [nameLoging, setNameLoging] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e) => {
    let name = e.target.value;
    // name = name[0].toUpperCase() + name.substring(1);
    // console.log(name);
    setNameLoging(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameLoging("");
  };
  const handleLogin = () => {
    //const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate("/", { replace: true });
    dispatch({
      type: types.login,
      payload: {
        name: nameLoging[0].toUpperCase() + nameLoging.substring(1),
      },
    });
  };
  return (
    <div className="container mt-5">
      <div className="title">
        <h1>
          <span className="span">what </span>
          <span className="span">is </span>
          <span className="span">your </span>
          <span className="span">name?</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          className="form-control"
          name="searchText"
          value={nameLoging}
          onChange={handleInputChange}
          autoComplete="off"
          style={{ textAlign: "center" }}
        />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-info " onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default LoginScreen;

// importar context - extraer dispatch
// disparar la accion en el handleLogin
//
