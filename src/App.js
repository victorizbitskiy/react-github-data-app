import React, { useState } from "react";
import GitHubUser from "./components/GitHubUser";
import UserRepositories from "./components/UserRepositories";
import RepositoryReadme from "./components/RepositoryReadme";
import SearchForm from "./components/SearchForm";

function App() {
  const [login, setLogin] = useState(); // moonhighway  victorizbitskiy objectionary
  const [repo, setRepo] = useState();
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login} />}
      {login && <UserRepositories login={login} repo={repo} onSelect={setRepo} />}
      {login && repo && (
        <RepositoryReadme login={login} repo={repo} />
      )}
    </>
  );
}

export default App;
