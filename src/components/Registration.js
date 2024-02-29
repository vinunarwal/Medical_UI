import React, { useState } from 'react';
import LabMemberRegistration from './LabMemberRegistration';
import IndividualRegistration from './IndividualRegistration';

function Registration({ switchToLoginPage, handleRegister }) {
    const [registrationType, setRegistrationType] = useState('');

    return (
        <>
            <div>
                <div className="min-h-screen flex justify-center items-center bg-gradient-to-br py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full bg-transparent p-8 rounded-md shadow-md border-2  transform hover:scale-105 transition duration-300 ease-in-out">
                        <h1 className='text-3xl text-center font-bold text-gray-800 mb-6'>Registration Page</h1>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => setRegistrationType('lab')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out">Lab Member</button>
                            <button onClick={() => setRegistrationType('individual')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out">Individual</button>
                        </div>
                        {registrationType === 'lab' && (
                            <LabMemberRegistration switchToLoginPage={switchToLoginPage} handleRegister={handleRegister} />
                        )}
                        {registrationType === 'individual' && (
                            <IndividualRegistration switchToLoginPage={switchToLoginPage} handleRegister={handleRegister} />
                        )}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Registration;
