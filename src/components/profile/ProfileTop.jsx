import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({ profile }) => {
  console.log(profile);
  return (
    <div className="profile-top bg-primary p-2">
      <img
        className="round-img my-1 imgRound"
        src={profile[0].user.avatar}
        alt=""
      />
      <h1 className="large">{profile[0].user.name}</h1>
      <p className="lead">
        {profile[0].status}
        {profile[0].company ? <span> at {profile[0].company}</span> : null}
      </p>
      <p>{profile[0].location ? <span>{profile[0].location}</span> : null}</p>
      <div className="icons my-1">
        {profile[0].website ? (
          <a
            href={profile[0].website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}
        {profile[0].social
          ? Object.entries(profile[0].social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
