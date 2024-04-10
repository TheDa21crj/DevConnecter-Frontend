import React, { Fragment, useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
// import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
// import ProfileExperience from "./ProfileExperience";
// import ProfileEducation from "./ProfileEducation";
// import ProfileGithub from "./ProfileGithub";
// import { getProfileById } from "../../actions/profile";

// state
import AuthContext from "./../../store/auth-context";

import axios from "axios";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setprofiles] = useState([]);

  const { id } = useParams();

  const authCtx = useContext(AuthContext);

  const getProfileById = async () => {
    try {
      const response = await axios.get("/api/profile");

      if (response.status === 200) {
        setLoading(false);

        console.log(response.data);
        setprofiles(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileById();
  }, []);

  useEffect(() => {
    if (profiles.length > 0) console.table(profiles[0].user);
  }, [profiles]);

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <>
            {profiles.length > 0 ? (
              <>
                <Link to="/profiles" className="btn btn-light">
                  Back To Profiles
                </Link>
                {authCtx.isLoggedIn &&
                  loading === false &&
                  authCtx.user.email === profiles[0].user.email && (
                    <Link to="/edit-profile" className="btn btn-dark">
                      Edit Profile
                    </Link>
                  )}
                <div className="profile-grid my-1">
                  <ProfileTop profile={profiles} />
                  <ProfileAbout profile={profiles[0]} />
                  {/* <div className="profile-exp bg-white p-2">
                    <h2 className="text-primary">Experience</h2>
                    {profile.experience.length > 0 ? (
                      <Fragment>
                        {profile.experience.map((experience) => (
                          <ProfileExperience
                            key={experience._id}
                            experience={experience}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h4>No experience credentials</h4>
                    )}
                  </div>

                  <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">Education</h2>
                    {profile.education.length > 0 ? (
                      <Fragment>
                        {profile.education.map((education) => (
                          <ProfileEducation
                            key={education._id}
                            education={education}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      <h4>No education credentials</h4>
                    )}
                  </div> */}

                  {/* {profiles.githubusername && (
                    <ProfileGithub username={profile.githubusername} />
                  )} */}
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        </Fragment>
      )}
    </section>
  );
};

export default Profile;
