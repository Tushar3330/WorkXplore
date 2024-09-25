import Navbar from "../common/Navbar";

import Job from "../layout/jobs/Jobcard";

import Filterjobs from "../layout/jobs/Filterjobs";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9];

const Jobs = () => {

   
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-30%">
            <Filterjobs />
          </div>
          {jobsArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((job) => (
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
