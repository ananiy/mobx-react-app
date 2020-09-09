import React from "react";
import "./App.css";
import { Counts } from "./components/count";
import { Users } from "./components/user";

function App() {
  return (
    <div className="App">
      <Counts />
      <Users />
    </div>
  );
}

export default App;
