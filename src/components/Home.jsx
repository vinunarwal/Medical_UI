import React, { useState, useEffect } from 'react';
import PatientInfo from './PatientInfo'
import Medi from './Medi'
import Test from './Test'
import { Link } from 'react-router-dom';


function Home({ handleLogout }) {

   return (
      <div className="m-3 flex flex-row justify-around h-screen">
         <div className='flex flex-column print-d-none'>
            <div className='flex justify-center'>
               <button onClick={handleLogout} className="bg-red-500 w-28 text-white px-6 py-2 rounded-md mr-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out">
                  Logout
               </button>
               <div>
                  <Link to="/dbData" className="btn btn-primary">View Patient Record</Link>
               </div>
            </div>
            <PatientInfo />
            <Test />
         </div>
         <Medi />

      </div>
   )
}

export default Home
