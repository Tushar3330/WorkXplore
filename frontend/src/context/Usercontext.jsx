/* eslint-disable react/prop-types */
// UserContext.jsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Create a UserProvider component
export const UserProvider = ({ children }) => {
  // Global user state
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // No need for nested object
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
