import React from "react";
import { Link } from "react-router-dom";
import Profile_icon from '../assests/profile_icon.png';
import Med_icon from '../assests/medical_logo.png';

function Navbar({ handleLogout }) {
   const handleLogoutClick = () => {
      handleLogout();
   };

   return (
      <nav className="bg-gray-800 shadow-lg nav_print">
         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link to="/" className="flex items-center">
               <img src={Med_icon} className="w-16 h-14 mr-2" alt="Medical Logo" /> {/* Adjust the width and height here */}
               <span className="text-white text-lg font-bold tracking-wider uppercase">Medical App</span> {/* Add a text label for the medical logo */}
            </Link>
            <div className="flex items-center">
               <Link
                  to="/dbData"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
               >
                  View Records
               </Link>
               <button onClick={handleLogoutClick} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 ml-4 rounded-full shadow-md transition duration-300 ease-in-out">
                  Log Out
               </button>
               <div className="ml-4">
                  <a href="/">
                     <img src={Profile_icon} alt="Profile" className="w-10 h-10 rounded-full shadow-md" />
                  </a>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
