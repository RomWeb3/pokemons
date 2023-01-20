import { Navigate } from "react-router-dom";
import AuthenticationService from "./services/auth-service";

function PrivateRoute({ children }: any) {
  const isAuthenticated = AuthenticationService.isAuthenticated;

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
