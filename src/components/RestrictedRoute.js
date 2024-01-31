import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isAuth } = useAuth();
  // const { isLoggedIn } = useAuth();

  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
