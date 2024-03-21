import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile_icon from "../assests/profile_icon.png";
import axios from "axios";
import Med_icon from '../assests/medical_logo.png';

function Navbar({ handleLogout }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const handleLogoutClick = () => {
    handleLogout();
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      if (!token) {
        setError("Token not found in localStorage");
        setLoading(false);
        return;
      }

      const response = await axios.get("http://localhost:5000/details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response data:", response.data);
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error fetching user details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg nav_print">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Med_icon} className="w-16 h-14 mr-2" alt="Medical Logo" />
          <span className="text-white text-lg font-bold tracking-wider uppercase">
            Medical App
          </span>
        </Link>
        <div className="flex items-center relative">
     
          <Link
            to="/dbData"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            View Records
          </Link>
          <button
            onClick={handleLogoutClick}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 ml-4 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            Log Out
          </button> 
          <button onClick={toggleDropdown} className="ml-4">
            <img
              src={Profile_icon}
              alt="Profile"
              className="w-10 h-10 rounded-full shadow-md"
            />
          </button>
          {isDropdownOpen && userData && (
            <div className="dropdown absolute right-0 mt-3 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <div className="p-2">
                <h3 className="text-lg font-semibold mb-2">User Details</h3>
                <p className="mb-1"><strong>Username:</strong> {userData.username}</p>
                <p className="mb-1"><strong>Email:</strong> {userData.email}</p>
                {/* Add more user details as needed */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
