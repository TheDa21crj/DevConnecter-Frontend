import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Spinner from "../layout/Spinner";

// state
import AuthContext from "./../../store/auth-context";

import axios from "axios";

const Landing = () => {
  const [data, setData] = useState([]);

  const authCtx = useContext(AuthContext);

  const dataFun = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=lZORFNXHHfw166nb7Zu1YOIkHAGJ_ShIPLjUgAfUPQM`
      );

      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFun();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Spinner />
      ) : (
        <section
          className="landing"
          style={{
            background: `url("${data[0].urls.full}") no-repeat center center/cover`,
          }}
        >
          <div className="dark-overlay">
            <div className="landing-inner">
              <h1 className="x-large">Developer Connector</h1>
              <p className="lead">
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              {authCtx.isLoggedIn ? (
                <div className="buttons">
                  <Link to="/dashboard" className="btn btn-primary">
                    View Profile
                  </Link>
                </div>
              ) : (
                <div className="buttons">
                  <Link to="/register" className="btn btn-primary">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-light">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Landing;
