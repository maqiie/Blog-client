// import React, { useState } from "react";
// import { FaUser, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { CgLogOut, CgProfile } from "react-icons/cg";

// import "./Navbar.css";

// function Navbar({ isLoggedIn }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   console.log("Is User Logged In?", isLoggedIn); // Add this console log

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     // Reset user-related state if needed
//     // setCurrentUser(null);

//     // Redirect to the home page
//     navigate("/");
//   };

//   return (
//     <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
//       <div className="nav-left">
//         <Link to="/" className="nav-logo">
//           iBlog.
//         </Link>
//       </div>
//       <div className="nav-toggle" onClick={toggleMenu}>
//         <FaBars className="menu-icon" />
//       </div>
//       <ul className={`nav-list ${menuOpen ? "menu-open" : ""}`}>
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/about" className="nav-link">
//             About
//           </Link>
//         </li>
//         <li className="nav-item">
//           <a href="/blog" className="nav-link">
//             Blogs
//           </a>
          
//         </li>

//         {isLoggedIn ? (
//           <>
            
//             <li className="nav-item">
//               <Link to="/createpost" className="nav-link">
//                 Create
//               </Link>
//             </li>
//             <l className="nav-item">
//               <Link to="/profile" className="nav-link">
//                 <CgProfile/>
//                 Profile
//               </Link>
//             </l>
//             <l className="nav-item1">
//               <button onClick={handleLogout} className="nav-link">
                
//                 <CgLogOut/>
//                 logout
//               </button>
//             </l>
            
//           </>
//         ) : (
//           <l className="nav-item1">
//             <Link to="/auth" className="nav-link1">
//               <FaUser className="user-icon1" />
//               sign
//                up
//             </Link>
//           </l>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CgLogOut, CgProfile } from "react-icons/cg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    closeMenu(); // Close the menu when logging out
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          iBlog.
        </Link>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <FaBars className="menu-icon" />
      </div>
      <ul className={`nav-list ${menuOpen ? "menu-open" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link" onClick={closeMenu}>
            Blogs
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <Link to="/createpost" className="nav-link" onClick={closeMenu}>
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" onClick={closeMenu}>
                <CgProfile />
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link">
                <CgLogOut />
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/auth" className="nav-link" onClick={closeMenu}>
              <FaUser className="user-icon" />
              Sign up
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
