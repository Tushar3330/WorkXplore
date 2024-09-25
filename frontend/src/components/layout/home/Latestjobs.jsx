import JobCard from "./LatestJobcard";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const allJobs = [
        {
          _id: 1,
          title: "Frontend Developer",
          description:
            "We are looking for a frontend developer who can work on React and Vue.js",
          position: 5,
          jobType: "Full Time",
          salary: 10,
          company: {
            name: "Google",
          },
        },
        {
          _id: 2,
          title: "Backend Developer",
          description:
            "Join our team as a backend developer working with Node.js and Express.",
          position: 3,
          jobType: "Full Time",
          salary: 12,
          company: {
            name: "Facebook",
          },
        },
        {
          _id: 3,
          title: "Data Scientist",
          description:
            "We are seeking a data scientist to analyze large datasets and derive insights.",
          position: 2,
          jobType: "Part Time",
          salary: 15,
          company: {
            name: "Amazon",
          },
        },
        {
          _id: 4,
          title: "UI/UX Designer",
          description:
            "Looking for a creative UI/UX designer to enhance our product interface.",
          position: 4,
          jobType: "Contract",
          salary: 8,
          company: {
            name: "Apple",
          },
        },
        {
          _id: 5,
          title: "DevOps Engineer",
          description:
            "We need a DevOps engineer to manage our cloud infrastructure and CI/CD pipelines.",
          position: 2,
          jobType: "Full Time",
          salary: 14,
          company: {
            name: "Microsoft",
          },
        },
        {
          _id: 6,
          title: "Product Manager",
          description:
            "Seeking a product manager to lead product development and strategy.",
          position: 1,
          jobType: "Full Time",
          salary: 18,
          company: {
            name: "Netflix",
          },
        },
      ];
      

  return (  
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
