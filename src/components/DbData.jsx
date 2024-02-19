import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DbData() {
    const [userData, setUserData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleViewData = () => {
        fetchData();
    };

    return (
        <>
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
                            {/* Add more cells based on your user schema */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleViewData}>
                View Data
            </button>
        </>
    );
}

export default DbData;
