import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import axios from "axios";

const Landing = () => {
  const [data, setData] = useState([]);

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
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
