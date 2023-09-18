

// import React, { useState } from "react";
//  import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ onToggleForm }) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios({
//         method: "post",
//         url: "https://pizza-api-3.onrender.com/auth/sign_in",
        
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: {
//           email,
//           password,
//           remember_me: rememberMe,
//         },
//         beforeRedirect: (opts, res) => {
//           opts.headers = {
//             "Content-Type": "application/json",
//           };
//         },
//       });

//       if (response.status === 200) {
//         const authTokenHeader = response.headers["authorization"];
//         if (authTokenHeader) {
//           const authToken = authTokenHeader.split("Bearer ")[1];
//           if (authToken) {
//             localStorage.setItem("authToken", authToken);
//             console.log("Stored authToken:", authToken);
//             navigate("/createpost");
//           } else {
//             setError("Invalid Authorization header format.");
//           }
//         } else {
//           setError("Authorization header not found in response.");
//         }
//       } else {
//         setError("Login failed. Check your credentials.");
//         console.error("Login failed. Response:", response);
//       }
//     } catch (error) {
//       setError("Error logging in. Please try again later.");
//       console.error("Error logging in:", error);
//     }
//   };


//   return (
//     <div className="auth-form bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4 text-blue-600">Login</h2>
//       {error && <p className="text-red-500">{error}</p>}
      // <form onSubmit={handleLogin}>
      //   <div className="mb-3">
      //     <label className="block text-sm font-medium text-gray-600">
      //       Email
      //     </label>
      //     <input
      //       type="email"
      //       value={email}
      //       onChange={(e) => setEmail(e.target.value)}
      //       className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label className="block text-sm font-medium text-gray-600">
      //       Password
      //     </label>
      //     <input
      //       type="password"
      //       value={password}
      //       onChange={(e) => setPassword(e.target.value)}
      //       className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label className="block text-sm font-medium text-gray-600">
      //       <input
      //         type="checkbox"
      //         checked={rememberMe}
      //         onChange={() => setRememberMe(!rememberMe)}
      //         className="mr-1"
      //       />
      //       Remember me
      //     </label>
      //   </div>
      //   <button
      //     type="submit"
      //     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 shadow-md"
      //   >
      //     Login
      //   </button>
      // </form>
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
import "./Login.css"

const Login = ({ onToggleForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading indicator

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Show the loader while making the request

      const response = await axios({
        method: "post",
        url: "https://pizza-api-3.onrender.com/auth/sign_in",
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
    } finally {
      setLoading(false); // Hide the loader after the request is completed
    }
  };

  return (
    <div className="auth-form bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Login</h2>
      {loading ? ( // Conditionally render the loader while loading
        <div className="spinnerContainer">
          <div className="spinner1"></div>
          <div className="loader1">
            <p>loading</p>
            <div className="words">
              <span className="word">posts</span>
              <span className="word">images</span>
              <span className="word">followers</span>
              <span className="word">hashtags</span>
              <span className="word">posts</span>
            </div>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Login;
