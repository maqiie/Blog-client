import React, { useState } from "react";
import axios from "axios";

const Signup = ({ onToggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/auth", {
        user: {
          // Wrap the parameters in a 'user' object
          name,
          email,
          password,
          password_confirmation: confirmPassword,
          // Other necessary fields like nickname and image
        },
      });

      if (response.status === 200) {
        // Signup successful, you can handle redirection or other actions here
        console.log("Signup successful");
      } else {
        // Handle signup error
        console.log("Signup failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

//   return (
//     <div className="auth-form bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4 text-green-600">Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <div className="mb-3">
//           <label className="block text-sm font-medium text-gray-600">
//             Name
//           </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="block text-sm font-medium text-gray-600">
//             Email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="block text-sm font-medium text-gray-600">
//             Password
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="block text-sm font-medium text-gray-600">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="mt-1 p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 shadow-md"
//         >
//           Sign Up
//         </button>
//       </form>
//       <p className="mt-4">
//         Already have an account?{" "}
//         <button
//           onClick={onToggleForm}
//           className="text-green-500 hover:underline focus:outline-none"
//         >
//           Log In
//         </button>
//       </p>
//     </div>
//   );
// };
return (
  <div className="auth-form bg-white p-6 rounded shadow">
    <h2 className="text-2xl font-semibold mb-4 text-green-600">Sign Up</h2>
    <form onSubmit={handleSignup}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded border-solid border-green-400 w-full focus:border-green-400 focus:outline-none"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
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
    <p className="mt-4 text-center"> {/* Center-align the text */}
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
