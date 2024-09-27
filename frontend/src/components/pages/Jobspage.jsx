import Navbar from "../common/Navbar";

import Job from "../layout/jobs/Jobcard";

// import Filterjobs from "../layout/jobs/Filterjobs";

import { useJob } from "../../context/Jobcontext";

const Jobs = () => {
  const { allJobs } = useJob();

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <Job key={job} job={job} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
