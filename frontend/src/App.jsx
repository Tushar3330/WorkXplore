import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/HomePage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./components/pages/JobsPage";
import Browse from "./components/pages/BrowsePage";
import Profile from "./components/pages/ProfilePage";
import Jobdescription from "./components/layout/jobs/Jobdescription";
import Admin from "./components/pages/Admin";
import Companies from "./components/pages/CompanyPage";
import CompanyCreate from "./components/layout/company/CompanyCreate";
import CompanySetup from "./components/layout/company/CompanySetup";
import RecruiterJobsPage from "./components/pages/RecruiterJobsPage";
import PostJob from "./components/layout/recruiterJobs/PostJob";
import ApplicantPage from "./components/pages/ApplicantPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/description/:id",
      element: <Jobdescription />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
    }
    ,

    {
      path: "admin",
      element: <Admin />,
    },
  //routes  for the recruites company
  {
    path :"/recruiter/companies",
    element : <ProtectedRoute><Companies /></ProtectedRoute>
  }
  ,
  {
    path :"/recruiter/companies/create",
    element : <ProtectedRoute><CompanyCreate /></ProtectedRoute>
  },
  {
    path :"/recruiter/companies/:id",
    element : <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },

  //recruiter jobs

  {
    path :"/recruiter/jobs",
    element : <ProtectedRoute><RecruiterJobsPage /></ProtectedRoute>
  }
  ,
  {
    path :"/recruiter/jobs/create",
    element : <ProtectedRoute><PostJob /></ProtectedRoute>
  }
  ,
  {
    path :"/recruiter/jobs/:id/applicants",
    element : <ProtectedRoute><ApplicantPage /></ProtectedRoute>
  }

  ]);



  return (
    <>
      {/* RouterProvider is used to provide the routes to the app */}
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
