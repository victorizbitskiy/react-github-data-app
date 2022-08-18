import React from 'react';
import UserRepositories from './UserRepositories';

const userDetails = ({ data }) => {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }} />
      <UserRepositories
        login={data.login}
        onSelect={repoName => console.log(`${repoName} selected`)}
      />
    </div>
  );
};

export default userDetails;