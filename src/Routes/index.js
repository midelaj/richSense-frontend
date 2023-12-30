import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "layouts/Main";
import Home from "../pages/Home";
import Advisors from "../pages/Advisors";
import AdvisorDetails from "pages/Advisors/Advisor"
import SignUp from "pages/Users/SignUp";
import SignIn from "pages/Users/SignIn";
import Appointments from "pages/Appointment";
import Goals from "pages/Goals";
import Expense from "pages/ExpenseTracking";
import 'react-toastify/dist/ReactToastify.css';


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
      {
        path: "/signin",
        element: <SignIn />,
      },

      {
        path: "/appoinments/new",
        element: <Appointments />,
      },

      {
        path: "/goals",
        element: <Goals />,
      },
      {
        path: "/expenses",
        element: <Expense />,
      },
    ],
  },
]);
const Router = () => <RouterProvider router={router} />;
export default Router;
