import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ auth }) {
  return auth ? <Navigate to="/" /> : <Navigate to="/login" />;
}

export default PrivateRoute;
