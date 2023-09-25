
// // UserProfile.js
// import React, { useEffect, useState } from 'react';
// import './Profile.css'; // Import the CSS file
// import axios from 'axios'; // Import Axios

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get('https://pizza-api-3.onrender.com/auth/validate_token')
//       .then((response) => {
//         setUser(response.data.user);
//       })
//       .catch((error) => {
//         console.error('Error fetching user details:', error);
//       });
//   }, []);

//   if (!user) {
//     return <div><div class="loader2">
//     <span class="l">L</span>
//     <span class="o">o</span>
//     <span class="a">a</span>
//     <span class="d">d</span>
//     <span class="i">i</span>
//     <span class="n">n</span>
//     <span class="g">g</span>
//     <span class="d1">.</span>
//     <span class="d2">.</span>
//   </div></div>; // You can replace this with a loading spinner or message
//   }

//   return (
//     <div className="user-profile">
//       <img src={user.avatar} alt={user.name} className="avatar" />
//       <h2>{user.name}</h2>
//       <p>{user.bio}</p>
//       <ul className="user-details">
//         <li>Email: {user.email}</li>
//         <li>Location: {user.location}</li>
//         <li>Website: <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Fetch user profile data from the backend when the component mounts
    axios.get('https://blog-api0.onrender.com/api/v1/profiles/1') // Replace '1' with the actual user's ID or a dynamic value
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Make a PUT request to update the user's profile data
    axios.put(`https://blog-api0.onrender.com/api/v1/profiles/${profile.id}`, profile)
      .then(() => {
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFetchProfile = () => {
    // Fetch user profile
    axios.get('https://blog-api0.onrender.com/profile')
      .then((response) => {
        const userProfile = response.data;
        // Handle the retrieved user profile data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateProfile = () => {
    // Update user profile
    const updatedProfileData = {
      first_name: 'New First Name',
      last_name: 'New Last Name',
      bio: 'New Bio',
    };

    axios.patch('https://blog-api0.onrender.com/profile', { profile: updatedProfileData })
      .then((response) => {
        const updatedProfile = response.data.profile;
        // Handle the updated user profile data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={handleFetchProfile}>Fetch Profile</button>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      {editing ? (
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={profile.first_name}
            onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
          />
          {/* Add more fields for editing */}
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>First Name: {profile.first_name}</p>
          {/* Display other profile information here */}
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

