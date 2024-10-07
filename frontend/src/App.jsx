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
      path: "admin",
      element: <Admin />,
    },
  //routes  for the recruites company
  {
    path :"/recruiter/companies",
    element : <Companies />
  }
  ,
  {
    path :"/recruiter/companies/create",
    element : <CompanyCreate />
  },
  {
    path :"/recruiter/companies/:id",
    element : <CompanySetup />
  },

  //recruiter jobs

  {
    path :"/recruiter/jobs",
    element : <RecruiterJobsPage />
  }
  ,
  {
    path :"/recruiter/jobs/create",
    element : <PostJob />
  }
  ,
  {
    path :"/recruiter/jobs/:id/applicants",
    element : <ApplicantPage />
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
