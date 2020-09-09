import React from "react";
import { useCountStore } from "../hooks/use-count-store";
import { observer } from "mobx-react-lite";
import { CountStoreContext } from "../contexts/count-store";
import { CountStore } from "../stores/count";

interface CountProps {
  name: string;
}

const Count = observer<CountProps>(({ name }) => {
  const countStore = useCountStore();
  return (
    <div>
      <h3>name: {name}</h3>
      <div>
        <span>count: {countStore.count}</span>
        <span>---</span>
        <span>double count: {countStore.doubleCount}</span>
        <span>---</span>
        <button onClick={countStore.addCount}>add</button>
      </div>
    </div>
  );
});

const CountContainer: React.FC = ({ children }) => {
  return (
    <CountStoreContext.Provider value={new CountStore()}>
      {children}
    </CountStoreContext.Provider>
  );
};

export const Counts = () => (
  <>
    <Count name="root"></Count>
    <Count name="root"></Count>
    {new Array(5).fill(0).map((n, i) => (
      <CountContainer key={i}>
        <Count name={`count-${i}`}></Count>
      </CountContainer>
    ))}
  </>
);
