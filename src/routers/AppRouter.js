import React, { useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <Router>
      <React.StrictMode>
        <div>
          <Routes>
            {/* <Route exact path="/login" element={<LoginScreen />} /> */}
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <LoginScreen />
                </PublicRoutes>
              }
            />

            {/* <Route
              path="/"
              element={
                <PrivateRoutes
                  component={DashboardRoutes}
                  isAuthtenticaded={user.logged}
                ></PrivateRoutes>
              }
            ></Route> */}
            <Route
              path="/*"
              element={
                <PrivateRoutes>
                  <DashboardRoutes />
                </PrivateRoutes>
              }
            />
          </Routes>
        </div>
      </React.StrictMode>
    </Router>
  );
};

export default AppRouter;
// <PrivateRoutes
//   path="/"
//   component={DashboardRoutes}
//   isAuthtenticaded={user.logged}
// />;
