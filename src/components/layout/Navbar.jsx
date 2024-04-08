import React, { Fragment, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// state
import AuthContext from "./../../store/auth-context";

export default function Navbar() {
  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const logout = async () => {
    redirect("/signIn");

    authCtx.logout();
  };

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>
      <Fragment>{authCtx.isLoggedIn ? authLinks : guestLinks}</Fragment>
    </nav>
  );
}
