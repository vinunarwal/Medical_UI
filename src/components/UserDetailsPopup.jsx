import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDetailsPopup() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
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

  fetchUserData();
}, []); 


  return (
    <div className="popup">
      <div className="popup-content">
        <h2>User Details</h2>
        {loading && <p>Loading user details...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <table>
            <tbody>
              <tr>
                <td className="text-white">Username:</td>
                <td className="text-white">{userData.username}</td>
              </tr>
              <tr>
                <tr className="text-white">Email:</tr>
                <td className="text-white">{userData.email}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserDetailsPopup;
