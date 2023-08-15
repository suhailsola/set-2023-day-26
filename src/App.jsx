import Home from "./pages/Home";
import Jobs from "./pages/Job";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostJobs from "./pages/PostJobs";
import Talents from "./pages/Talents";
import Stats from "./pages/Stats";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

// react component
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/job/:id",
      element: <Jobs />,
    },
    {
      path: "/post-jobs",
      element: <PostJobs />,
    },
    {
      path: "/talents",
      element: <Talents />,
    },
    {
      path: "/stats",
      element: <Stats />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  // fragment, can also use div
  return <RouterProvider router={router} />;
};

export default App;
