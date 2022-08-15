import React, { useState } from "react";
import GitHubUser from "./components/GitHubUser";

function App() {
  const [login, selLogin] = useState("victorizbitskiy"); // moonhighway  victorizbitskiy objectionary
  return <GitHubUser login={login} />;
}

export default App;
