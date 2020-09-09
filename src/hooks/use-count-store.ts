import React from "react";
import { CountStoreContext } from "../contexts/count-store";

export const useCountStore = () => {
  return React.useContext(CountStoreContext);
};
