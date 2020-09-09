import React from "react";
import "./App.css";
import { Counts } from "./components/count";
import { Users } from "./components/user";

function App() {
  const [count, setCount] = React.useState(0);
  const MemoCounts = React.useMemo(() => <Counts />, []);
  const MemoUsers = React.useMemo(() => <Users />, []);
  return (
    <div className="App">
      <div>{count}</div>
      <button
        onClick={() => {
          // 会触发 App 组件重新渲染
          setCount((v) => v + 1);
        }}
      >
        add
      </button>
      {MemoCounts}
      {MemoUsers}
    </div>
  );
}

export default App;
