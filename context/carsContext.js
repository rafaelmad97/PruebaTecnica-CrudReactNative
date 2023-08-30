import { createContext, useCallback, useReducer } from "react";
import axios from "axios";

const defaultValuesContext = {};

export const CarsContext = createContext(defaultValuesContext);

function dispatcher(state, { action, payload }) {
  switch (action) {
    default:
      return { ...state };
  }
}

export default function CarsState({ children }) {
  const [State, dispatchState] = useReducer(dispatcher, defaultValuesContext);

  return (
    <CarsContext.Provider
      value={{
        ...State,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
}
