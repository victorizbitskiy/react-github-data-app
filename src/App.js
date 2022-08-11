import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const GitHubUser = ({ login }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return
    fetch(`http://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login])

  if (data)
    return <pre>{JSON.stringify(data, null, 2)}</pre>

  return null;
};

function App() {
  return <GitHubUser login={"moonhighway"} />;
}

export default App;
