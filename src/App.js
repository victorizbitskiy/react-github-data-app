import React, { useState } from "react";
import GitHubUser from "./components/GitHubUser";
import UserRepositories from "./components/UserRepositories";
import RepositoryReadme from "./components/RepositoryReadme";
import SearchForm from "./components/SearchForm";

function App() {
  const [login, setLogin] = useState(`victorizbitskiy`); // moonhighway  victorizbitskiy objectionary
  const [repo, setRepo] = useState(`js-snake-game`);

  const handleSearch = login => {
    if (login) return setLogin(login)
    setLogin('');
    setRepo('');
  };

  if (!login)
    return (
      <SearchForm value={login} onSearch={handleSearch} />
    );

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
      <GitHubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}

export default App;
