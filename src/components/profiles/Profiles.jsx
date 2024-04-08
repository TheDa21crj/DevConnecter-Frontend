import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

import axios from "axios";

const Profiles = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setprofiles] = useState([]);

  const getProfiles = async () => {
    const response = await axios.get(`/api/profile`);

    if (response.status === 200) {
      console.log(response.data);

      setprofiles(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default Profiles;
