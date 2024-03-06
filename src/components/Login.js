import React, { useState } from 'react';

function Login({ switchToRegisterPage, handleLogin }) {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
         await handleLogin(username, password);
         setErrorMessage('');
      } catch (error) {
         if (error.response && error.response.status === 400 && error.response.data && error.response.data.error === 'Invalid username or password') {
            setErrorMessage('Invalid username or password. Please try again.');
         } else {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
         }
      }
      setIsSubmitting(false);
   };


   return (
      <div className="min-h-screen flex justify-center items-center px-4">
         <div className="bg-transparent px-12 py-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
         
            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                  <input
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
               </div>
               <div>
                  <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
               </div>

               {errorMessage && (
               <div className="text-red-500 text-center mb-4">
                  {errorMessage}
               </div>
            )}

               <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  disabled={isSubmitting}
               >
                  {isSubmitting ? 'Logging in...' : 'Login'}
               </button>
            </form>
            <div className="text-center text-sm mt-4">
               <p>
                  Don't have an account?{' '}
                  <button onClick={switchToRegisterPage} className="text-purple-600 font-semibold focus:outline-none">
                     Register here
                  </button>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Login;
