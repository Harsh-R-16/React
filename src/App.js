import React from "react";
import Debounce from "./Components/Debounce/Debounce";
import Fetch from "./Components/Fetch/Fetch";
import Progress from "./Components/Progress/Progress";
import "./App.css";
function App() {
  return (
    <>
      <Debounce />
      <Fetch />
      <Progress />
    </>
  );
}

export default App;
