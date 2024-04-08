import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import DashboardActions from "./DashboardActions";
// import Experience from "./Experience";
// import Education from "./Education";
// import { getCurrentProfile, deleteAccount } from "../../actions/profile";

// state
import AuthContext from "./../../store/auth-context";

const Dashboard = () =>
  // {
  // getCurrentProfile,
  // deleteAccount,
  // auth: { user },
  // profile: { profile },
  // }
  {
    const [dataShow, setData] = useState([]);

    const authCtx = useContext(AuthContext);

    const getCurrentProfile = async () => {
      console.log("Fetching Profiles...");
      try {
        const res = await api.get("/api/profile/me");

        console.log(res);
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
          <i className="fas fa-user" /> Welcome
          {/* {user && user.name} */}
        </p>
        {profile !== null ? (
          <>
            {/* <DashboardActions /> */}
            {/* <Experience experience={profile.experience} /> */}
            {/* <Education education={profile.education} /> */}

            <div className="my-2">
              <button
                className="btn btn-danger"
                // onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </>
        )}
      </section>
    );
  };

export default Dashboard;
