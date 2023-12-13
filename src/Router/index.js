import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
  import Home from "../pages/Home"
  import Advisors from "../pages/Advisors"
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/Advisors",
      element: <div>Advisors</div>,
    },
  ]);
  const Router =()=>(
    <RouterProvider router={router}/>

  )
  export default Router;