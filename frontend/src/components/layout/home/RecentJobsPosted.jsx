import { useSelector } from "react-redux";
import JobCard from "../jobs/Jobcard";

function RecentJobsPosted() {
  const { allAdminJobs } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth); // Assuming user info is stored in auth state

  // Filter jobs created by the current recruiter
  const userJobs = allAdminJobs.filter((job) => job.created_by === user._id); 

  // Sort the jobs by the `createdAt` field in descending order
  const sortedUserJobs = userJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Recent </span> Job Posted
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {sortedUserJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          sortedUserJobs.slice(0, 6).map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default RecentJobsPosted;
