import { createContext, useCallback, useReducer } from "react";
import axios from "axios";

const defaultValuesContext = {
  cars: [],
};

export const CarsContext = createContext(defaultValuesContext);

function dispatcher(state, { action, payload }) {
  switch (action) {
    case "cars":
      return { ...state, cars: payload };
    default:
      return { ...state };
  }
}

export default function CarsState({ children }) {
  const [State, dispatchState] = useReducer(dispatcher, defaultValuesContext);

  const testApi = useCallback(async () => {
    return await axios
      .get("https://localhost:7074/WeatherForecast")
      .then(({ data }) => data);
  });

  const fetchCars = useCallback(async () => {
    return await axios.get("https://localhost:7074/Cars").then(({ data }) =>
      dispatchState({
        action: "cars",
        payload: data,
      })
    );
  });

  return (
    <CarsContext.Provider
      value={{
        ...State,
        testApi,
        fetchCars,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
}
