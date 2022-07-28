import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

// const PrivateRoutes = ({ isAuthtenticaded, component: Component, ...rest }) => {
//   const navigate = useNavigate();

//   return (
//     <Route
//       {...rest}
//       component={(props) =>
//         isAuthtenticaded ? (
//           <Component {...props} />
//         ) : (
//           navigate("/login", { replace: true })
//         )
//       }
//     />
//   );
// };

export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to="/login" />;
};

// PrivateRoutes.propTypes = {
//   isAuthtenticaded: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };

export default PrivateRoutes;
