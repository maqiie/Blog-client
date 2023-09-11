// // import React, { useState } from "react";
// // import axios from "axios";

// // const Login = ({ onToggleForm }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [rememberMe, setRememberMe] = useState(false); // Added state for "Remember me"

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:3001/auth/sign_in", {
// //         email,
// //         password,
// //         remember_me: rememberMe, // Send "Remember me" value in the request
// //       });

// //       if (response.status === 200) {
// //         // Login successful, store the token in local storage
// //         const authToken = response.headers["access-token"];
// //         const client = response.headers["client"];
// //         const uid = response.headers["uid"];

// //         localStorage.setItem("authToken", authToken);
// //         localStorage.setItem("client", client);
// //         localStorage.setItem("uid", uid);

// //         // Check if the token is stored
// //         console.log("Login successful");
// //         console.log("Stored authToken:", authToken);
// //         console.log("Stored client:", client);
// //         console.log("Stored uid:", uid);

// //         // You can handle redirection or other actions here
// //       } else {
// //         // Handle login error
// //         console.log("Login failed");
// //       }
// //     } catch (error) {
// //       console.error("Error logging in:", error);
// //     }
// //   };
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

// // const Login = ({ onToggleForm }) => {
// //   const navigate = useNavigate(); // Initialize the navigate function

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [rememberMe, setRememberMe] = useState(false);

// //   useEffect(() => {
// //     // Check for login state in local storage when the component mounts
// //     const authToken = localStorage.getItem("authToken");
// //     if (authToken) {
// //       // If the user is already logged in, navigate to the desired route
// //       navigate("/createpost"); // Change "/dashboard" to the route you want to navigate to
// //     }
// //   }, [navigate]);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:3001/auth/sign_in", {
// //         email,
// //         password,
// //         remember_me: rememberMe,
// //       });

// //       if (response.status === 200) {
// //         const authToken = response.headers["access-token"];
// //         const client = response.headers["client"];
// //         const uid = response.headers["uid"];

// //         localStorage.setItem("authToken", authToken);
// //         localStorage.setItem("client", client);
// //         localStorage.setItem("uid", uid);

// //         console.log("Login successful");
// //         console.log("Stored authToken:", authToken);
// //         console.log("Stored client:", client);
// //         console.log("Stored uid:", uid);

// //         // Navigate to the desired route after a successful login
// //         navigate("/createpost"); // Change "/dashboard" to the route you want to navigate to
// //       } else {
// //         console.log("Login failed");
// //       }
// //     } catch (error) {
// //       console.error("Error logging in:", error);
// //     }
// //   };
// const Login = ({ onToggleForm }) => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   // Initialize isLoggedIn state by checking localStorage
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));

//   useEffect(() => {
//     // Check for login state in local storage when the component mounts
//     const authToken = localStorage.getItem("authToken");
//     if (authToken) {
//       setIsLoggedIn(true); // User is logged in
//       // Redirect to the desired route for logged-in users
//       // navigate("/createpost"); // Change "/createpost" to your desired route
//     } else {
//       setIsLoggedIn(false); // User is not logged in
//     }
//   }, [navigate]);

// // const handleLogin = async (e) => {
// //   e.preventDefault();

// //   try {
// //     const response = await axios.post("http://localhost:3001/auth/sign_in", {
// //       email,
// //       password,
// //       remember_me: rememberMe,
// //     });

// //     if (response.status === 200) {
// //       const authToken = response.headers["Authorization"];
// //       const client = response.headers["client"];
// //       const uid = response.headers["uid"];

// //       // Check if authToken is present and starts with "Bearer "
// //       if (authToken && authToken.startsWith("Bearer ")) {
// //         // Extract and store the Bearer token in local storage
// //         const token = authToken.split("Bearer ")[1];
// //         localStorage.setItem("authToken", token);
// //       } else {
// //         console.log("Invalid Authorization header format.");
// //         return; // Handle the error appropriately
// //       }

// //       localStorage.setItem("client", client);
// //       localStorage.setItem("uid", uid);

// //       console.log("Login successful");
// //       console.log("Stored authToken:", authToken);
// //       console.log("Stored client:", client);
// //       console.log("Stored uid:", uid);

// //       setIsLoggedIn(true); // User is now logged in

// //       // Navigate to the desired route after a successful login
// //       navigate("/createpost"); // Change "/createpost" to your desired route
// //     } else {
// //       console.log("Login failed");
// //     }
// //   } catch (error) {
// //     console.error("Error logging in:", error);
// //   }
// // };
// const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post("http://localhost:3001/auth/sign_in", {
//       email,
//       password,
//       remember_me: rememberMe,
//     });

//     if (response.status === 200) {
//       const authToken = response.headers["Authorization"];
//       const client = response.headers["client"];
//       const uid = response.headers["uid"];

//       localStorage.setItem("authToken", authToken);
//       localStorage.setItem("client", client);
//       localStorage.setItem("uid", uid);

//       console.log("Login successful");
//       console.log("Stored authToken:", authToken);
//       console.log("Stored client:", client);
//       console.log("Stored uid:", uid);

//       setIsLoggedIn(true); // User is now logged in

//       // Navigate to the desired route after a successful login
//       navigate("/createpost"); // Change "/createpost" to your desired route
//     } else {
//       console.log("Login failed");
//     }
//   } catch (error) {
//     console.error("Error logging in:", error);
//   }
// };

//   return (
//     <div className="auth-form bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4 text-blue-600">Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label className="block text-sm font-medium text-gray-600">
//             Email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
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
//             className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="block text-sm font-medium text-gray-600">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//               className="mr-1"
//             />
//             Remember me
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 shadow-md"
//         >
//           Login
//         </button>
//       </form>
//       <p className="mt-4">
//         Don't have an account?{" "}
//         <button
//           onClick={onToggleForm}
//           className="text-blue-500 hover:underline focus:outline-none"
//         >
//           Sign Up
//         </button>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
 import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onToggleForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/auth/sign_in",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email,
          password,
          remember_me: rememberMe,
        },
        beforeRedirect: (opts, res) => {
          opts.headers = {
            "Content-Type": "application/json",
          };
        },
      });

      if (response.status === 200) {
        const authTokenHeader = response.headers["authorization"];
        if (authTokenHeader) {
          const authToken = authTokenHeader.split("Bearer ")[1];
          if (authToken) {
            localStorage.setItem("authToken", authToken);
            console.log("Stored authToken:", authToken);
            navigate("/createpost");
          } else {
            setError("Invalid Authorization header format.");
          }
        } else {
          setError("Authorization header not found in response.");
        }
      } else {
        setError("Login failed. Check your credentials.");
        console.error("Login failed. Response:", response);
      }
    } catch (error) {
      setError("Error logging in. Please try again later.");
      console.error("Error logging in:", error);
    }
  };


  return (
    <div className="auth-form bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-1"
            />
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 shadow-md"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <button
          onClick={onToggleForm}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
