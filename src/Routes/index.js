import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "layouts/Main";
import Home from "../pages/Home";
import Advisors from "../pages/Advisors";
import AdvisorDetails from "pages/Advisors/Advisor";
import SignUp from "pages/Users/SignUp";
import SignIn from "pages/Users/SignIn";
import Appointments from "pages/Appointment";
import Goals from "pages/Goals";
import Expense from "pages/ExpenseTracking";
import "react-toastify/dist/ReactToastify.css";
import SignUpFormAdvisor from "pages/Advisors/components/SignUp";
import AdvisorAppointment from "pages/Advisors/components/AppointmentDetails";
import SigninFormAdvisor from "pages/Advisors/components/SignIn";

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
        path: "/signUp-Advisors",
        element: <SignUpFormAdvisor />,
      },

      {
        path: "/signIn-Advisors",
        element: <SigninFormAdvisor />,
      },

      {
        path: "/advisors/:advisorId/appointments",
        element: <AdvisorAppointment />,
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
