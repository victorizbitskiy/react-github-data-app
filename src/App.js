import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const GitHubUser = ({ login }) => {
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    setLoading(true);

    fetch(`http://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

function App() {
  console.log("App");
  return <GitHubUser login={"victorizbitskiy"} />; // moonhighway  victorizbitskiy objectionary
}

export default App;
