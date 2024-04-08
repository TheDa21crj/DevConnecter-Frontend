import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

// state
import AuthContext from "./../../store/auth-context";

const PrivateRoute = ({
  component: Component,
  // auth: { isAuthenticated, loading },
}) => {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn);

  // if (loading) return <Spinner />;
  if (authCtx.isLoggedIn) return <Component />;

  return <Navigate to="/login" />;

  // return <div>hello PR</div>;
};

export default PrivateRoute;