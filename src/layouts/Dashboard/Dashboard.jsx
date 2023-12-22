import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="w-64 min-h-screen  text-white bg-[#5F33E1]">
        <ul className="menu p-4">
          {user ? (
            <>
              <li>
                <NavLink to="/dashboard/user-profile">
                  <FaUser />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-tasks">
                  <FaTasks />
                  All Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-task">
                  <MdPostAdd />
                  Add Tasks
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <p>Please Login To use it</p>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
