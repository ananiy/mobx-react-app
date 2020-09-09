import React from "react";
import { CountStore } from "../stores/count";

export const CountStoreContext = React.createContext(new CountStore());
