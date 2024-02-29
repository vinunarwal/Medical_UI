import React, { useState, useEffect } from 'react';
import PatientInfo from './PatientInfo'
import Medi from './Medi'
import Test from './Test'
import axios from 'axios';


function Home({ handleLogout }) {

    return (
        <div className="m-3 flex flex-row justify-around h-screen">
            <div className='flex flex-column print-d-none'>
            <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-3 rounded-md mr-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out">
                  Logout
               </button>
                <PatientInfo />
                <Test />

            </div>
            <Medi />
        </div>
    )
}

export default Home
