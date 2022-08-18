import React from "react";
import Fetch from "./Fetch";
import UserDetails from "./UserDetails";

const GitHubUser = ({ login }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
};

export default GitHubUser;