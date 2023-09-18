
// UserProfile.js
import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import the CSS file
import axios from 'axios'; // Import Axios

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details when the component mounts
    axios.get('https://pizza-api-3.onrender.com/auth/validate_token')
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <ul className="user-details">
        <li>Email: {user.email}</li>
        <li>Location: {user.location}</li>
        <li>Website: <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></li>
      </ul>
    </div>
  );
};

export default Profile;
