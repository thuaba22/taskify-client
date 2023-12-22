import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import PageTitle from "../../../components/PageTitle/PageTitle";

const UserProfile = () => {
  const auth = useContext(AuthContext);
  // State to store user information
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user information
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/users/${auth?.user?.email}`
        );
        const userData = await response.json();

        if (response.ok) {
          setUser(userData);
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, [auth?.user?.email]); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="mt-10">
      <PageTitle title="Taskify | My Profile"></PageTitle>
      <h2 className="text-5xl font-bold text-center">My Profile</h2>
      <hr className="border-2 border-[#5F33E1] w-[100px] mx-auto mt-3 mb-4" />

      {user ? (
        <div className="h-[400px] flex flex-col text-md font-semibold justify-center items-center space-y-3 w-[500px] bg-[#F3F0FF] p-4 mt-10 mb-10 mx-auto">
          <img className="rounded-full" src={user.photoURL} alt="Profile" />
          <p>Name: {user.name}</p>
          <p className="">Email: {user?.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
