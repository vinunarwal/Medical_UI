import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Registration from './Registration';
import Login from './Login';
//import Homepage from './Homepage';
import Home from './Home'

function AllData() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('login');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleRegister = async (username, password, email, labName, labAddress) => {
        const response = await axios.post('http://localhost:5000/register', {
            username,
            password,
            email,
            labName,
            labAddress,
        });
        console.log(response.data);
        setCurrentPage('login');
        localStorage.setItem('token', response.data.token);
    };


    const handleLogin = async (username, password) => {
        const response = await axios.post('http://localhost:5000/login',
            { username, password });
        console.log(response.data);
        setIsLoggedIn(true);
        localStorage.setItem('token', response.data.token);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        setCurrentPage('login');
    };

    const switchToRegisterPage = () => {
        setCurrentPage('register');
    };

    const switchToLoginPage = () => {
        setCurrentPage('login');
    };

    return (
        <div className='flex justify-center items-center my-5'>
            <div className='text-center'>
                {isLoggedIn ? (
                    <Home handleLogout={handleLogout} />
                ) : currentPage === 'register' ? (
                    <Registration switchToLoginPage={switchToLoginPage} handleRegister={handleRegister} />
                ) : (
                    <Login switchToRegisterPage={switchToRegisterPage} handleLogin={handleLogin} />
                )}
            </div>
        </div>
    );
}

export default AllData;
