import React from "react";
import Fetch from "./Fetch";
import userDetails from "./userDetails";

const GitHubUser = ({ login }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={userDetails}
    />
  );
};

export default GitHubUser;