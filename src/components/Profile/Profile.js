
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
    axios.get(`https://blog-api0.onrender.com/profiles/${userId}`)
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
    axios.put(`https://blog-api0.onrender.com/profiles/${profile.id}`, profile)
      .then(() => {
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-xl mx-auto">
        {editing ? (
          <div className="mt-4 p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label className="block text-gray-600">First Name:</label>
              <input
                type="text"
                value={profile.first_name}
                onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Last Name:</label>
              <input
                type="text"
                value={profile.last_name}
                onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Bio:</label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                rows="4"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Nickname:</label>
              <input
                type="text"
                value={profile.nickname}
                onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {/* Add more fields for editing */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-2 transition duration-300 hover:bg-blue-600"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="mt-4 p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <div className="mb-4">
              <strong className="text-gray-600">First Name:</strong> {profile.first_name}
            </div>
            <div className="mb-4">
              <strong className="text-gray-600">Last Name:</strong> {profile.last_name}
            </div>
            <div className="mb-4">
              <strong className="text-gray-600">Bio:</strong> {profile.bio}
            </div>
            <div className="mb-4">
              <strong className="text-gray-600">Nickname:</strong> {profile.nickname}
            </div>
            {/* You can add more profile fields here */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-2 transition duration-300 hover:bg-blue-600"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;




