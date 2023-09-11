import React from "react";
import { FaHome, FaGlobe, FaComments, FaPowerOff, FaCameraRetro, FaFilm, FaBook, FaCogs, FaMapMarker, FaInfo } from "react-icons/fa";
import "./Sidebar.css"; // Import your CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="main-menu">
        <ul>
          <li>
            <a href="https://jbfarrow.com">
              <FaHome className="nav-icon" />
              <span className="nav-text">Community Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <FaGlobe className="nav-icon" />
              <span className="nav-text">Global Surveyors</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <FaComments className="nav-icon" />
              <span className="nav-text">Group Hub Forums</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <FaCameraRetro className="nav-icon" />
              <span className="nav-text">Survey Photos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaFilm className="nav-icon" />
              <span className="nav-text">Surveying Tutorials</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaBook className="nav-icon" />
              <span className="nav-text">Surveying Jobs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaCogs className="nav-icon" />
              <span className="nav-text">Tools & Resources</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaMapMarker className="nav-icon" />
              <span className="nav-text">Member Map</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaInfo className="nav-icon" />
              <span className="nav-text">Documentation</span>
            </a>
          </li>
        </ul>
        <ul className="logout">
          <li>
            <a href="#">
              <FaPowerOff className="nav-icon" />
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

