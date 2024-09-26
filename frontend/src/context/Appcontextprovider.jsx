/* eslint-disable react/prop-types */

import { UserProvider } from './UserContext'; 
import { JobProvider } from './JobContext';

// AppContextProvider component
export const AppContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <JobProvider>
        {children}
      </JobProvider>
    </UserProvider>
  );
};