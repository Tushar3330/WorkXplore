/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Create JobContext
const JobContext = createContext();

// Custom hook to use JobContext
export const useJob = () => {
  return useContext(JobContext);
};

// JobProvider component
export const JobProvider = ({ children }) => {
  const [allJobs, setAllJobs] = useState([]);

  // Context value that will be available to all consumers
  const value = {
    allJobs,
    setAllJobs,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
