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
import CompanyCreate from "./components/layout/Company/CompanyCreate";
import CompanySetup from "./components/layout/Company/CompanySetup";

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
  //routes  for the recruites side
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
