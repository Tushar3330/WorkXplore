/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link, useNavigate } from "react-router-dom";
import { FaBriefcase, FaIndustry, FaCalendarCheck } from "react-icons/fa";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useSelector } from "react-redux";
import useGetAllRecruiterJobs from "@/hooks/useGetAllRecruiterJobs";


function RecruiterDashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth);

  useGetAllCompanies();
  const { companies } = useSelector((store) => store.company);

  useGetAllRecruiterJobs();
  const { allAdminJobs } = useSelector((store) => store.job);

  

  let totalApplicants = 0;
  const jobStats = [];

  allAdminJobs.forEach((job) => {
    totalApplicants += job.applications.length;

    const month = new Date(job.createdAt).toLocaleString("default", {
      month: "short",
    });
    const stat = jobStats.find((entry) => entry.name === month);

    if (stat) {
      stat.applications += job.applications.length;
      stat.jobTitles.push(job.title);
    } else {
      jobStats.push({
        name: month,
        applications: job.applications.length,
        jobTitles: [job.title],
      });
    }
  });

  jobStats.sort(
    (a, b) => new Date(`01-${a.name}-2024`) - new Date(`01-${b.name}-2024`)
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-300 p-2 rounded shadow">
          <p className="text-gray-800 font-bold">Month: {label}</p>
          <p className="text-blue-500">Applications: {data.applications}</p>
          <p className="text-gray-600">Jobs:</p>
          <ul className="list-disc list-inside">
            {data.jobTitles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex min-h-screen">
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
            to="/recruiter/jobs/create"
            className="flex items-center text-lg py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition duration-300"
          >
            <FaIndustry size={20} className="mr-3" />
            Post Jobs
          </Link>
        </div>
      </div>

      <div className="flex-1 p-3">
        <h1 className="text-3xl font-bold mb-8 text-center text-white bg-blue-800 p-4 rounded-lg">
          Welcome {user.fullname}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaBriefcase size={40} className="mb-4 text-blue-500" />
            <h2 className="text-lg font-medium">Total Applicants</h2>
            <p className="text-2xl font-bold text-blue-500">
              {totalApplicants}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaIndustry size={40} className="mb-4 text-green-500" />
            <h2 className="text-lg font-medium">Total Companies Created</h2>
            <p className="text-2xl font-bold text-green-500">
              {companies.length}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaCalendarCheck size={40} className="mb-4 text-purple-500" />
            <h2 className="text-lg font-medium">Total Jobs Created</h2>
            <p className="text-2xl font-bold text-purple-500">
              {allAdminJobs.length}
            </p>
          </div>
        </div>

        <div className="bg-gray-100 shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Applicants Per Job
          </h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="text-left px-6 py-3 border-b">Job Title</th>
                <th className="text-left px-6 py-3 border-b">Company</th>
                <th className="text-left px-6 py-3 border-b">
                  No. of Applicants
                </th>
              </tr>
            </thead>
            <tbody>
              {allAdminJobs.map((job, index) => {
                return (
                  <tr
                    key={job._id}
                    className={`hover:bg-blue-100 transition duration-300 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td
                      className="px-6 py-4 border-b text-blue-500 font-bold cursor-pointer hover:underline"
                      onClick={() =>
                        navigate(`/recruiter/jobs/${job._id}/applicants`)
                      }
                    >
                      {job.title}
                    </td>
                    <td className="px-6 py-4 border-b">{job.company.name}</td>
                    <td className="px-6 py-4 border-b text-blue-500 font-bold">
                      {job.applications.length}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Card className="mt-8 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Job Applications Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full" style={{ height: "400px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={jobStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="applications"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

 



      </div>
    </div>
  );
}

export default RecruiterDashboard;
