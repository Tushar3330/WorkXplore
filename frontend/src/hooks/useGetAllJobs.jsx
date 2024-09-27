import { JOB_API_END_POINT } from "../components/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useJob } from "@/context/JobContext"; // Import useJob from JobContext

const useGetAllJobs = () => {
  const { setAllJobs } = useJob(); // Get setAllJobs from JobContext

  useEffect(() => {
  
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setAllJobs(res.data.jobs); // Use setAllJobs from JobContext
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllJobs();
  }, []); // Dependency on searchedQuery
};

export default useGetAllJobs;
