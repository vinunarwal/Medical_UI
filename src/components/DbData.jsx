import React, { useState, useEffect } from "react";
import axios from "axios";
import Medi from "./Medi";

function DbData() {
   const [userData, setUserData] = useState([]);
   const [showMedi, setshowMedi] = useState(false);
   const [showTable, setShowTable] = useState(false);

   const fetchData = async () => {
      try {
         const response = await axios.get("http://localhost:5000/users");
         setUserData(response.data);
         console.log("responseData", response.data);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };
   const toggleMedi = () => {
      setshowMedi(!showMedi);
   };

   const handleViewData = () => {
      fetchData();
      setShowTable(true);
      console.log("userData", userData);
   };

   return (
      <>
         <div className="d-flex justify-content-center mb-5">
            <button className="btn btn-primary" onClick={handleViewData}>
               View Data
            </button>
         </div>
         <div className="d-flex justify-content-around">
            {showTable && (
               <div>
                  <table className="table">
                     <thead>
                        <tr>
                           <th>Patient Name</th>
                           <th>Age</th>
                           <th>Gender</th>
      
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
                             
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
            <div>{showMedi && <Medi />}</div>
         </div>
      </>
   );
}

export default DbData;
