import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({ profile }) => {
  console.log(profile);

  return (
    <div className="profile bg-light">
      <img src={profile.user.avatar} alt="" className="round-img imgRound" />
      <div>
        <h2>{profile.user.name}</h2>
        <p>
          {profile.status}{" "}
          {profile.company && <span> at {profile.company}</span>}
        </p>
        <p className="my-1">
          {profile.location && <span>{profile.location}</span>}
        </p>
        <Link to={`/profile/${profile._id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {profile.skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
