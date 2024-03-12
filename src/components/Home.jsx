import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import Medi from './Medi';
import Test from './Test';
import DbData from './DbData';
import Navbar from './Navbar';

function Home({ handleLogout }) {
   const [viewPatientRecord, setViewPatientRecord] = useState(false);

   const handleViewPatientRecord = () => {
      setViewPatientRecord(true);
   };

   const handleGoBack = () => {
      setViewPatientRecord(false);
   };

   return (
      <>
         <div>
            <Navbar handleLogout={handleLogout} />
         </div>
         <div className="mx-3 flex flex-row justify-around h-screen mt-5">
            <div className='flex flex-column print-d-none'>
               <div className='flex justify-center'>
                  {/*<button onClick={handleLogout} className="bg-red-500 w-28 text-white px-6 py-2 rounded-md mr-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out">
                     Logout
                  </button>*/}
                  {/*<button onClick={handleViewPatientRecord} className="btn btn-secondary">Patient Record</button>*/}
               </div>
               {viewPatientRecord && <DbData onGoBack={handleGoBack} />}

               {!viewPatientRecord && (
                  <>
                     <div className='flex mt-4'>
                        <div>
                           <PatientInfo />
                           <Test />
                        </div>
                        <div>
                           <Medi />
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
      </>
   );
}

export default Home;
