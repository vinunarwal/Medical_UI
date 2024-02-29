import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function Homepage({ handleLogout }) {
   const [registrationData, setRegistrationData] = useState([]);
   const [showData, setShowData] = useState(false);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [decodedToken, setDecodedToken] = useState(null); 

   const handleViewData = async () => {
      setLoading(true);
      try {
         const response = await axios.get('http://localhost:5000/users');
         setRegistrationData(response.data);
         setShowData(true);
      } catch (error) {
         setError('Error fetching registration data');
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         try {
            const decoded = jwtDecode(token); 
            setDecodedToken(decoded);
            console.log(decoded);
         } catch (error) {
            console.error('Error decoding token:', error.message);
         }
      }
   }, []);

   return (
      <div className="min-h-screen flex justify-center items-center">
         <div className="bg-transparent p-8 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Homepage!</h1>
            <div className="flex justify-center">
               <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-3 rounded-md mr-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out">
                  Logout
               </button>
               <button onClick={handleViewData} className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out">
                  {loading ? 'Loading...' : 'View Data'}
               </button>
            </div>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            {/*{decodedToken && (
               <div className="mt-5">
                  <h2 className="text-xl font-bold mb-4">Decoded Token:</h2>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-auto">{JSON.stringify(decodedToken, null, 2)}</pre>
               </div>
            )}*/}
            {showData && (
               <div className="mt-5">
                  <h2 className="text-xl font-bold mb-4">Registration Data:</h2>
                  <table className="w-full">
                     <thead>
                        <tr className="bg-gray-200">
                           <th className="px-4 py-2">Username</th>
                           <th className="px-4 py-2">Email</th>
                           <th className="px-4 py-2">Lab Name</th>
                           <th className="px-4 py-2">Lab Address</th>
                        </tr>
                     </thead>
                     <tbody>
                        {registrationData.map((user, index) => (
                           <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                              <td className="border px-4 py-2">{user.username}</td>
                              <td className="border px-4 py-2">{user.email}</td>
                              <td className="border px-4 py-2">{user.labName}</td>
                              <td className="border px-4 py-2">{user.labAddress}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
   );
}

export default Homepage;
