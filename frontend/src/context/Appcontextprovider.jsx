/* eslint-disable react/prop-types */

import { UserProvider } from './UserContext'; // Import the UserProvider

// AppContextProvider component
export const AppContextProvider = ({ children }) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};