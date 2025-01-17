import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/HomePage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./components/pages/JobsPage";
import Browse from "./components/pages/BrowsePage";
import Profile from "./components/pages/ProfilePage";
import Jobdescription from "./components/layout/jobs/Jobdescription";
import Companies from "./components/pages/CompanyPage";
import CompanyCreate from "./components/layout/company/CompanyCreate";
import CompanySetup from "./components/layout/company/CompanySetup";
import RecruiterJobsPage from "./components/pages/RecruiterJobsPage";
import PostJob from "./components/layout/recruiterJobs/PostJob";
import ApplicantPage from "./components/pages/ApplicantPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoute2 from "./utils/ProtectedRoute2";
import 'animate.css';


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_test_51QSX7nK02yOLHIZBusAjmNG7ljqV9kpVQBnloQwsq4FaIQz684fu0hg8tkhNjPXsUtMJLVjuYkPExF5xsBEjYKRl00ZRYxm0jy');
// Admin panel imports
import Sidebar from "./components/admin/components/Sidebar";
import Navbar from "./components/admin/components/Navbar";
import Home from "./components/admin/pages/Home";

import Users from "./components/admin/pages/Users";
import Recruiters from "./components/admin/pages/Recruiters";
import Single from "./components/admin/pages/Single";
import New from "./components/admin/pages/New";
import Single2 from "./components/admin/pages/Single2";
import Post from "./components/admin/components/Post";
import ChartHolder from "./components/admin/pages/ChartHolder";
import StatHolder from "./components/admin/pages/StatHolder";

import Revenuehome from "./components/revenue/Revenuehome";
import Plans from "./components/revenue/Plans";

function App() {
  const approuter = createBrowserRouter([
    // General Routes
    { path: "/", element: <Homepage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/jobs", element: <Jobs /> },
    { path: "/description/:id", element: <Jobdescription /> },
    { path: "/browse", element: <Browse /> },
    { path: "/profile", element: <Profile /> },
    { path: "/dashboard", element: <Dashboard /> },

    // Recruiter Routes
    {
      path: "/recruiter/companies",
      element: (
        <ProtectedRoute>
          <Companies />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recruiter/companies/create",
      element: (
        <ProtectedRoute>
          <CompanyCreate />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recruiter/companies/:id",
      element: (
        <ProtectedRoute>
          <CompanySetup />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recruiter/jobs",
      element: (
        <ProtectedRoute>
          <RecruiterJobsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recruiter/jobs/create",
      element: (
        <ProtectedRoute>
          <PostJob />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recruiter/jobs/:id/applicants",
      element: (
        <ProtectedRoute>
          <ApplicantPage />
        </ProtectedRoute>
      ),
    },

    //Revenue Routes
    {
      path: "/revenuehome",
      element: <Revenuehome />,
    },
    {
      path: "/plans",
      element: <Plans />,
    }, 


    // Admin Panel Routes
    {
      path: "/adminpanel",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <Home />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },

    {
      path: "/adminpanel/users",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <Users />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/users/new",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <New />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/users/:userId",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <Single />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/recruiters",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <Recruiters />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/recruiters/new",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <New />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/recruiters/:recruiterId",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <Single2 />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/posts",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <Post />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/charts",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <ChartHolder />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },
    {
      path: "/adminpanel/stats",
      element: (
        <ProtectedRoute2>
          <div className="admin-panel flex">
            <Sidebar />
            <div className="admin-content flex-grow">
              <Navbar />
              <StatHolder />
            </div>
          </div>
        </ProtectedRoute2>
      ),
    },


  ]);
  return (
    // Wrap your application with Elements provider to provide Stripe context
    <Elements stripe={stripePromise}>
      <RouterProvider router={approuter} />
    </Elements>
  );;
}

export default App;
