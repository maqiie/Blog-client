// Footer.js

// import React from 'react';
// import './Footer.css'; // Make sure to have this CSS file in the same directory
// import {FaFacebookF,:} from fa
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>About Us</h3>
//           <p>Welcome to iBlog – your creative corner in the digital world! We're thrilled to have you join our journey through the realms of words, ideas, and inspiration. At iBlog, we're dedicated to curating a platform that celebrates the art of blogging and empowers individuals to share their stories with the world.</p>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: contact@example.com</p>
//           <p>Phone: (123) 456-7890</p>
//         </div>
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-links">
//           {/* <h3>Follow Us</h3> */}
//             <a href="#" className="social-link">Facebook</a>
//             <a href="#" className="social-link">Twitter</a>
//             <a href="#" className="social-link"></a>
//           </div>
//         </div>
//       </div>
//       <p className="footer-bottom">&copy; {new Date().getFullYear()} iBlog. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import './Footer.css';
// import { FaFacebookF, FaTwitter, Fa , FaTiktok, FaInstagram } from 'react-icons/fa'; // Import the necessary icons

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>About Us</h3>
//           <p>Welcome to iBlog – your creative corner in the digital world! We're thrilled to have you join our journey through the realms of words, ideas, and inspiration. At iBlog, we're dedicated to curating a platform that celebrates the art of blogging and empowers individuals to share their stories with the world.</p>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: contact@example.com</p>
//           <p>Phone: (123) 456-7890</p>
//         </div>
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-links">
//             <a href="#" className="social-link"><FaFacebookF /> </a>
//             <a href="#" className="social-link"><FaTwitter /> </a>
//             <a href="#" className="social-link"><FaInstagram /> </a>
//             <a href="#" className="social-link"><FaTiktok /> </a>
//           </div>
//         </div>
//       </div>
//       <p className="footer-bottom">&copy; {new Date().getFullYear()} iBlog. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import the necessary icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Welcome to iBlog – your creative corner in the digital world! We're thrilled to have you join our journey through the realms of words, ideas, and inspiration. At iBlog, we're dedicated to curating a platform that celebrates the art of blogging and empowers individuals to share their stories with the world.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            {/* <p>yoi</p> */}
            <a href="#" className="social-link"><FaFacebookF /> Facebook</a>
            <a href="#" className="social-link"><FaTwitter /> Twitter</a>
            <a href="#" className="social-link"><FaInstagram /> Instagram</a>
            <a href="#" className="social-link"><FaTiktok /> TikTok</a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} iBlog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
