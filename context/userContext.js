import { createContext, useCallback, useReducer } from "react";
import axios from "axios";

const defaultValuesContext = {
  users: [],
};

export const UserContext = createContext(defaultValuesContext);

function dispatcher(state, { action, payload }) {
  switch (action) {
    case "listUsers":
      return { ...state, users: payload };
    default:
      return { ...state };
  }
}

export default function UsersState({ children }) {
  const [State, dispatchState] = useReducer(dispatcher, defaultValuesContext);

  const fetchUsers = useCallback(async () => {
    await axios
      .get("https://localhost:7074/Users")
      .then(({ data }) =>
        dispatchState({
          action: "listUsers",
          payload: data,
        })
      )
      .catch((e) => {
        throw Error(e);
      });
  }, []);

  const agregarUsuario = useCallback(async (user) => {
    return axios.post("https://localhost:7074/Users", user).catch((e) => {
      throw Error(e.message);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...State,
        agregarUsuario,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
