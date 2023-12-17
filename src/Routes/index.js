import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "layouts/Main";
import Home from "../pages/Home";
import Advisors from "../pages/Advisors";
import AdvisorDetails from "pages/Advisors/Advisor"
import SignUp from "pages/Users/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/advisors",
        element: <Advisors />,
      },

      {
        path: "/advisors/:advisorId",
        element: <AdvisorDetails />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
const Router = () => <RouterProvider router={router} />;
export default Router;
