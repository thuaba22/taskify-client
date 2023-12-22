import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-[#F3F0FF]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="font-bold" to="/packages">
                Packages
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-bold" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="font-bold" to="/packages">
              Packages
            </Link>
          </li>
          <li>
            <Link className="font-bold" to="/reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn text-white bg-[#5F33E1] hover:bg-[#5F33E1]"
          >
            Logout
          </button>
        ) : (
          <Link
            className="btn text-white bg-[#5F33E1] hover:bg-[#5F33E1]"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
