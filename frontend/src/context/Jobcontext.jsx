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
  const [allAdminJobs, setAllAdminJobs] = useState([]);
  const [singleJob, setSingleJob] = useState(null);
  const [searchJobByText, setSearchJobByText] = useState("");
  const [allAppliedJobs, setAllAppliedJobs] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState("");

  // Context value that will be available to all consumers
  const value = {
    allJobs,
    setAllJobs,
    allAdminJobs,
    setAllAdminJobs,
    singleJob,
    setSingleJob,
    searchJobByText,
    setSearchJobByText,
    allAppliedJobs,
    setAllAppliedJobs,
    searchedQuery,
    setSearchedQuery,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
