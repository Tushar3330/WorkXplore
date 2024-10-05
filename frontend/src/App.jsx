import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./components/pages/Jobspage";
import Browse from "./components/pages/Browse";
import Profile from "./components/pages/Profile";
import Jobdescription from "./components/layout/jobs/Jobdescription";
import Admin from "./components/pages/Admin";

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
  ]);

  return (
    <>
      {/* RouterProvider is used to provide the routes to the app */}
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
