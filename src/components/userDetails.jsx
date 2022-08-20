import React from 'react';
import UserRepositories from './UserRepositories';

const userDetails = ({ data }) => {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }} />
    </div>
  );
};

export default userDetails;