import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileIcon from "../assests/profile_icon.png";
import axios from "axios";
import MedicalLogo from '../assests/medical_logo.png';
import Profile_text from './Img/profile_text.png'

function Navbar({ handleLogout }) {
   const navigate = useNavigate();
   const [userData, setUserData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

   const handleLogoutClick = () => {
      handleLogout();
      navigate("/");
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
               <img src={MedicalLogo} className="w-16 h-14 mr-2" alt="Medical Logo" />
               <span className="text-white text-lg font-bold tracking-wider uppercase">
                  Medical App
               </span>
            </Link>
            <div className="flex items-center">
               <Link
                  to="/dbData"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out mr-4"
               >
                  View Records
               </Link>
               <div className="relative">
                  <button onClick={toggleDropdown} className="focus:outline-none">
                     <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="w-10 h-10 rounded-full shadow-md"
                     />
                  </button>
                  {isDropdownOpen && (
                     <div className="dropdown absolute top-full w-max px-5 py-2 right-0 mt-4 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <div className="p-2">
                           <div className="flex justify-center">
                           <img src={Profile_text} alt="profile" className="h-9 w-32" />
                           </div>
                           {/*<h3 className="text-lg font-semibold mb-2 text-center text-green-500">PROFILE</h3>*/}
                           <p className="mb-1"><strong className="pr-2">Username:</strong> {userData?.username}</p>
                           <p className="mb-1"><strong className="pr-2">Email:</strong> {userData?.email}</p>
                           <hr className="border-t border-gray-500" />
                           <div className="flex justify-center">
                              <button
                                 onClick={handleLogoutClick}
                                 className="bg-red-600 hover:bg-red-700  text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out mt-2"
                              >
                                 Log Out
                              </button>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
