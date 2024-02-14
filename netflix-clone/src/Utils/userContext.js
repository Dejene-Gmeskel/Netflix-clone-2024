// userContext.js
import React, { createContext, useContext, useReducer } from "react";

// Create a context for the user state
const UserContext = createContext();

// Create a context provider to manage the state
export const UserProvider = ({ children }) => {
  const initialState = {
    user: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the context
export const useUser = () => useContext(UserContext);
