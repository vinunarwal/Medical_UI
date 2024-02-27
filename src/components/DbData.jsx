import React, { useState, useEffect } from "react";
import axios from "axios";
import Medi from "./Medi";

function DbData() {
  const [userData, setUserData] = useState([]);
  const [showMedi, setshowMedi] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUserData(response.data);
      console.log("responseData", response.data); // Log the userData to the console
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const toggleMedi = () => {
    setshowMedi(!showMedi);
  };

  const handleViewData = () => {
    fetchData();
    console.log("userData", userData); // Log the userData to the console after updating
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                {/* Add more columns based on your user schema */}
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user._id}>
                  <td>{user.patientinfo.firstName}</td>
                  <td>{user.patientinfo.age}</td>
                  <td>{user.patientinfo.gender}</td>
                  <td>
                    <button className="btn btn-primary" onClick={toggleMedi}>
                      View report
                    </button>
                  </td>
                  {/* Add more cells based on your user schema */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>{showMedi && <Medi />}</div>
      </div>
      <button className="btn btn-primary" onClick={handleViewData}>
        View Data
      </button>
    </>
  );
}

export default DbData;
