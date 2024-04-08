import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
// import { getCurrentProfile, deleteAccount } from "../../actions/profile";

// state
import AuthContext from "./../../store/auth-context";

import axios from "axios";

const Dashboard = () => {
  const [dataShow, setData] = useState([]);

  const authCtx = useContext(AuthContext);

  const getCurrentProfile = async () => {
    console.log("Fetching Profiles...");

    try {
      const res = await axios.get("/api/profile/me", {
        headers: { "x-auth-token": `${authCtx.token}` },
      });

      if (res.data) {
        console.log(res.data);

        setData([res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {authCtx.user.name}
      </p>

      {dataShow.length === 0 ? (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      ) : (
        <>
          <DashboardActions />
          <Experience experience={dataShow[0].experience} />
          <Education education={dataShow[0].education} />

          <div className="my-2">
            <button
              className="btn btn-danger"
              // onClick={() => deleteAccount()}
            >
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Dashboard;
