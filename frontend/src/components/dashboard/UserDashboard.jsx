/* eslint-disable react/no-unescaped-entities */

// Importing actions
import { Line, Pie } from "react-chartjs-2"; // Importing chart components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { FaBriefcase, FaCalendarCheck, FaIndustry } from "react-icons/fa"; // For icons
import { Link } from "react-router-dom"; // For navigation
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Badge } from "../ui/badge"; 
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
// For table

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


const UserDashboard = () => {
  useGetAppliedJobs();
  // Get applied jobs data from the store
  const { allAppliedJobs  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  // Calculate the number of applications per company
  const companiesApplied = allAppliedJobs.reduce((acc, job) => {
    const companyName = job.job?.company?.name;
    if (companyName) {
      acc[companyName] = (acc[companyName] || 0) + 1;
    }
    return acc;
  }, {});

  // Data for Job Application Trend (Line Chart)
  const jobApplicationData = {
    labels: allAppliedJobs.map((job) => job.createdAt?.split("T")[0]), // Dates of job applications
    datasets: [
      {
        label: "Jobs Applied",
        data: allAppliedJobs.map(() => 1), // Count of applications per date
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for Acceptance vs Rejection Rate (Pie Chart)
  const applicationStatusData = {
    labels: ["Accepted", "Rejected", "Pending"],
    datasets: [
      {
        data: [
          allAppliedJobs.filter((job) => job.status === "accepted").length,
          allAppliedJobs.filter((job) => job.status === "rejected").length,
          allAppliedJobs.filter((job) => job.status === "pending").length,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-white mb-4 bg-gray-900 p-2 rounded-lg">
          Dashboard
        </h2>
        <div className="space-y-4">
          <Link
            to="/"
            className="flex items-center text-lg py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition duration-300"
          >
            <FaBriefcase size={20} className="mr-3" />
            Home
          </Link>
          <Link
            to="/profile"
            className="flex items-center text-lg py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition duration-300"
          >
            <FaBriefcase size={20} className="mr-3" />
            Profile
          </Link>
          <Link
            to="/jobs"
            className="flex items-center text-lg py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition duration-300"
          >
            <FaIndustry size={20} className="mr-3" />
            Apply Job
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3">
        <h1 className="text-3xl font-bold mb-8 text-center text-white bg-blue-800 p-4 rounded-lg">
          Welcome  {user?.fullname}
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaBriefcase size={40} className="mb-4 text-blue-500" />
            <h2 className="text-lg font-medium">Total Jobs Applied</h2>
            <p className="text-2xl font-bold text-blue-500">
              {allAppliedJobs.length}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaIndustry size={40} className="mb-4 text-green-500" />
            <h2 className="text-lg font-medium">Total Companies Applied</h2>
            <p className="text-2xl font-bold text-green-500">
              {Object.keys(companiesApplied).length}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaCalendarCheck size={40} className="mb-4 text-purple-500" />
            <h2 className="text-lg font-medium">Acceptance Rate</h2>
            <p className="text-2xl font-bold text-purple-500">
              {allAppliedJobs.length > 0
                ? (
                    (allAppliedJobs.filter((job) => job.status === "accepted")
                      .length /
                      allAppliedJobs.length) *
                    100
                  ).toFixed(2)
                : 0}
              %
            </p>
          </div>
        </div>

        {/* Job Application Trend and Acceptance vs Rejection Rate Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Job Application Trend</h2>
            <Line data={jobApplicationData} height={200} />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">
              Acceptance vs Rejection Rate
            </h2>
            <Pie data={applicationStatusData} height={200} />
          </div>
        </div>

        {/* Applied Jobs Table */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium mb-4">Your Applied Jobs</h2>
          <Table>
            <TableCaption>A list of your applied jobs</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allAppliedJobs.length <= 0 ? (
                <span>You haven't applied to any jobs yet.</span>
              ) : (
                allAppliedJobs.map((appliedJob) => (
                  <TableRow key={appliedJob._id}>
                    <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                    <TableCell>{appliedJob.job?.title}</TableCell>
                    <TableCell>{appliedJob.job?.company?.name}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        className={`${
                          appliedJob?.status === "rejected"
                            ? "bg-red-400"
                            : appliedJob.status === "pending"
                            ? "bg-gray-400"
                            : "bg-green-400"
                        }`}
                      >
                        {appliedJob.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
