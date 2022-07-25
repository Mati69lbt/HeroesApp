import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate(lastPath, { replace: true });
    dispatch({
      type: types.login,
      payload: {
        name: "Matias",
      },
    });
  };
  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <button className="btn btn-info" onClick={handleLogin}>
        Login
      </button>
      <hr />
    </div>
  );
};

export default LoginScreen;

// importar context - extraer dispatch
// disparar la accion en el handleLogin
//
