import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthComponent from "./components/register/AuthComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import Blog from "./components/Blogs/Blogs";
import CreatePost from "./components/createpost/createpost";
import Health from "./components/Categories/Health";
import Travel from "./components/Categories/Travel";
import Music from "./components/Categories/Music";
import Art from "./components/Categories/Art";
import Education from "./components/Categories/Education";
import Fashion from "./components/Categories/Fashion";
import Other from "./components/Categories/Other";
import Science from "./components/Categories/Science";
import Sports from "./components/Categories/Sports";
import Technology from "./components/Categories/Technology";
import axios from "axios";

function App() {
  // const storedToken = localStorage.getItem("authToken"); // Retrieve Bearer token from local storage
  const storedToken = localStorage.getItem("authToken");
  const isLoggedIn = !!storedToken;
  const [currentUser, setCurrentUser] = useState(null); // State for storing user data

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      const authToken = localStorage.getItem("authToken"); // Retrieve the user's token from localStorage
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    });

    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Make a GET request to validate the user's token and fetch user data
        const response = await axios.get(
          "http://localhost:3001/auth/validate_token"
        ); // Use your backend URL
        const userData = response.data.data; // Assuming your user data is nested under "data"
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Check if the user is logged in
    if (isLoggedIn) {
      fetchUserData(); // Fetch user data if logged in
    }
  }, [isLoggedIn]); // Trigger the effect when the login status changes

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar isLoggedIn={isLoggedIn} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthComponent />} />

          <Route
            path="/blog"
            element={<Blog currentUserId={currentUser?.id} />}
          />

          <Route
            path="/createpost"
            element={<CreatePost currentUser={currentUser} />}
          />

          <Route path="/category/health" element={<Health />} />
          <Route path="/category/travel" element={<Travel />} />
          <Route path="/category/music" element={<Music />} />
          <Route path="/category/art" element={<Art />} />
          <Route path="/category/education" element={<Education />} />
          <Route path="/category/fashion" element={<Fashion />} />
          <Route path="/category/other" element={<Other />} />
          <Route path="/category/science" element={<Science />} />
          <Route path="/category/sports" element={<Sports />} />
          <Route path="/category/technology" element={<Technology />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
