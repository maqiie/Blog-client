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
