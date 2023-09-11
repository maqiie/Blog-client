// AuthComponent.js

import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';
import './AuthComponent.css'; // Create this CSS file for styling

const AuthComponent = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="auth-container">
      <div className={`auth-form-container ${showLogin ? 'login' : 'signup'}`}>
        {showLogin ? <Login onToggleForm={handleToggleForm} /> : <Signup onToggleForm={handleToggleForm} />}
      </div>
    </div>
  );
};

export default AuthComponent;
// import React from 'react';
// //  import { useAuth } from './AuthContext'; // Import the useAuth hook
// import Login from './login';
//   import Signup from './signup';

// const AuthComponent = () => {
//   const { isLoggedIn, login, logout } = useAuth(); // Use the useAuth hook to access authentication state and functions

//   const toggleForm = () => {
//     // Your toggle form logic
//   };

//   return (
//     <div className="auth-container">
//       {isLoggedIn ? (
//         <div>
//           {/* Display content for authenticated users */}
//           <p>Welcome, you are logged in!</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <div className="auth-form-container">
//           {/* Display login or signup forms based on isLoggedIn state */}
//           {showLogin ? (
//             <Login onToggleForm={toggleForm} />
//           ) : (
//             <Signup onToggleForm={toggleForm} />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthComponent;
