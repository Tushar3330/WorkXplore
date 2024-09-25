import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  // Create a browser router  for createing routes
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
  ]);

  return (
    <>

    {/* RouterProvider is used to provide the routes to the app */}
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
