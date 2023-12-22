import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Packages from "../pages/Packages/Packages";
import Reviews from "../pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/DashboardPages/UserProfile/UserProfile";
import AddTask from "../pages/DashboardPages/AddTask/AddTask";
import AllTask from "../pages/DashboardPages/AllTask/AllTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/all-tasks",
        element: <AllTask></AllTask>,
      },
      {
        path: "/dashboard/add-task",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);
export default router;
