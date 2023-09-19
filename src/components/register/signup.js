import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ onToggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();


  const setError = (errorMessage) => {
    console.error(errorMessage);
    // You can add logic here to display the error message to the user if needed
  };
  

 

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }
  
    try {
      const response = await axios.post("https://blog-api-y76j.vercel.app/auth", {
        user: {
          name,
          email,
          password,
          password_confirmation: confirmPassword,
        },
      });
  
      if (response.status === 200) {
        const authTokenHeader = response.headers["authorization"];
        if (authTokenHeader) {
          const authToken = authTokenHeader.split("Bearer ")[1];
          if (authToken) {
            localStorage.setItem("authToken", authToken);
            console.log("Stored authToken:", authToken);
            navigate("/"); // Redirect to the home page ("/")
          } else {
            setError("Invalid Authorization header format.");
          }
        } else {
          setError("Authorization header not found in response.");
        }
      } else {
        setError("Signup failed. Please check your details.");
        console.error("Signup failed. Response:", response);
      }
    } catch (error) {
      setError("Error signing up. Please try again later.");
      console.error("Error signing up:", error);
    }
  };
 
  
  
  return (
    <div className="auth-form bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 shadow-md w-full" // Added w-full class for full-width button
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        {" "}
        {/* Center-align the text */}
        Already have an account?{" "}
        <button
          onClick={onToggleForm}
          className="text-green-500 hover:underline focus:outline-none"
        >
          Log In
        </button>
      </p>
    </div>
  );
};

export default Signup;