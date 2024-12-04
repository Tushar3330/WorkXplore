import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaIndustry, FaCalendarCheck } from 'react-icons/fa';
 import useGetAllCompanies  from '@/hooks/useGetAllCompanies'

import { useSelector } from 'react-redux';
import useGetAllRecruiterJobs from '@/hooks/useGetAllRecruiterJobs';



function RecruiterDashboard() {

  const navigate = useNavigate();

  
  // Dummy data for the chart (could be fetched from an API)
  const jobStats = [
    { name: 'Jan', applications: 30 },
    { name: 'Feb', applications: 40 },
    { name: 'Mar', applications: 35 },
    { name: 'Apr', applications: 50 },
    { name: 'May', applications: 45 },
    { name: 'Jun', applications: 60 },
  ];

  // Dummy data for applications (could be fetched from an API)
  const recentApplications = [
    { applicant: 'John Doe', jobTitle: 'Software Engineer', status: 'Pending' },
    { applicant: 'Jane Smith', jobTitle: 'Product Manager', status: 'Accepted' },
    { applicant: 'Mark Lee', jobTitle: 'UI/UX Designer', status: 'Rejected' },
  ];

  useGetAllCompanies();
  const { companies } = useSelector((store) => store.company);

  useGetAllRecruiterJobs();
  const { allAdminJobs } = useSelector((store) => store.job);

  let  totalApplicants  = 0;
  // Assuming `allAdminJobs` contains an array of jobs, each with an `applicants` field which is an array of applicants
  allAdminJobs.forEach((job) => {
   totalApplicants =   totalApplicants + job.applications.length; // Get the number of applicants for the current job
   
    console.log(totalApplicants);
  });
  
  
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
            to="/recruiter/jobs/create"
            className="flex items-center text-lg py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition duration-300"
          >
            <FaIndustry size={20} className="mr-3" />
            Post Jobs
          </Link>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mt-6 text-center">
          <h3 className="text-lg font-medium text-white mb-2">
            Recent Activities
          </h3>
          <p className="text-sm text-gray-300">No recent activities to show.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3">
        <h1 className="text-3xl font-bold mb-8 text-center text-white bg-blue-800 p-4 rounded-lg">
          Recruiter Dashboard
        </h1>

        {/* Stats Section */}
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
           { companies.length}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <FaCalendarCheck size={40} className="mb-4 text-purple-500" />
            <h2 className="text-lg font-medium">Total  Jobs Created</h2>
            <p className="text-2xl font-bold text-purple-500">
             {allAdminJobs.length}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Applicants Per Job</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-800">
          <tr>
            <th className="text-left px-6 py-3 border-b">Job Title</th>
            <th className="text-left px-6 py-3 border-b">Company</th>
            <th className="text-left px-6 py-3 border-b">No. of Applicants</th>
          </tr>
        </thead>
        <tbody>
          {allAdminJobs.map((job, index) => (
            <tr
              key={job._id}
              className={`hover:bg-blue-100 transition duration-300 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td
                className="px-6 py-4 border-b text-blue-500 font-bold cursor-pointer hover:underline"
                onClick={() => navigate(`/recruiter/jobs/${job._id}/applicants`)}
              >
                {job.title}
              </td>
              <td className="px-6 py-4 border-b">{job.company.name}</td>
              <td className="px-6 py-4 border-b text-blue-500 font-bold">
                {job.applications.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        {/* Job Statistics Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Job Applications Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={jobStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="applications" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Job Applications Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{app.applicant}</p>
                    <p className="text-sm text-gray-500">{app.jobTitle}</p>
                  </div>
                  <Badge variant={app.status === 'Accepted' ? 'success' : app.status === 'Rejected' ? 'destructive' : 'outline'}>
                    {app.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Job Postings Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Active Job Postings</CardTitle>
          </CardHeader>
          <CardContent> 
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="font-medium">Software Engineer</p>
                <p className="text-sm text-gray-500">Posted on: 01/12/2024</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">Product Manager</p>
                <p className="text-sm text-gray-500">Posted on: 12/11/2024</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">UI/UX Designer</p>
                <p className="text-sm text-gray-500">Posted on: 10/10/2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
