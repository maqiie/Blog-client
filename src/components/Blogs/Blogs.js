
// import React, { useState, useEffect } from "react";
// import "font-awesome/css/font-awesome.min.css";

// import axios from "axios";
// import "./Blogs.css";

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const authToken = localStorage.getItem("authToken"); // Assuming you store the authentication token in local storage
//   const apiBaseUrl = "http://localhost:3001"; // Replace with your actual API base URL

//   // Initialize like and dislike counts as objects with default values of 0
//   const [likeCounts, setLikeCounts] = useState({});
//   const [dislikeCounts, setDislikeCounts] = useState({});

//   useEffect(() => {
//     axios
//       .get(`${apiBaseUrl}/posts`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           Accept: "application/json",
//         },
//       })
//       .then(async (response) => {
//         setPosts(response.data);

//         // Fetch like and dislike counts for each post
//         const postPromises = response.data.map(async (post) => {
//           try {
//             const countsResponse = await axios.get(
//               `${apiBaseUrl}/posts/${post.id}/like_dislike_counts`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${authToken}`,
//                   Accept: "application/json",
//                 },
//               }
//             );

//             const { likes_count, dislikes_count } = countsResponse.data;
//             const initialLikeCounts = {};
//             const initialDislikeCounts = {};

//             response.data.forEach((post) => {
//               initialLikeCounts[post.id] = 0;
//               initialDislikeCounts[post.id] = 0;

//               // ...
//             });
//             // Update like and dislike counts in state for the specific post
//             setLikeCounts((prevCounts) => ({
//               ...prevCounts,
//               [post.id]: likes_count,
//             }));
//             setDislikeCounts((prevCounts) => ({
//               ...prevCounts,
//               [post.id]: dislikes_count,
//             }));

//             // Attach like and dislike counts to the post object
//             return { ...post, likes_count, dislikes_count };
//           } catch (error) {
//             console.error("Error fetching like/dislike counts:", error);
//             return post; // Return the original post if there was an error
//           }
//         });

//         // Wait for all promises to resolve
//         const postsWithCounts = await Promise.all(postPromises);

//         // Update the state with posts including like and dislike counts
//         setPosts(postsWithCounts);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, [authToken, apiBaseUrl]);
//   const handleLikePost = (postId) => {
//     axios
//       .post(`${apiBaseUrl}/posts/${postId}/like`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then((response) => {
//         // Handle success, e.g., update the UI to reflect the liked post
//         console.log("Post liked successfully");
//         // Increment the like count for the post
//         setLikeCounts((prevCounts) => ({
//           ...prevCounts,
//           [postId]: prevCounts[postId] + 1,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error liking post:", error);
//       });
//   };

//   const handleDislikePost = (postId) => {
//     axios
//       .post(`${apiBaseUrl}/posts/${postId}/dislike`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then((response) => {
//         // Handle success, e.g., update the UI to reflect the disliked post
//         console.log("Post disliked successfully");
//         // Increment the dislike count for the post
//         setDislikeCounts((prevCounts) => ({
//           ...prevCounts,
//           [postId]: prevCounts[postId] + 1,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error disliking post:", error);
//       });
//   };

//   return (
//     <div className="blog">
//       <h2>Latest Blog Posts</h2>
//       <div className="post-list">
//         {posts.map((post, index) => (
//           <div key={index} className="post">
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-author">By {post.author}</p>
//             <div className="post-content">{post.content}</div>
//             {post.image_url && (
//               <img
//                 src={`${apiBaseUrl}${post.image_url}`} // Use the absolute image URL
//                 alt={post.title} // Set an appropriate alt text
//                 className="post-image"
//                 onLoad={() => console.log("Image loaded successfully")} // Log when the image is loaded
//                 onError={() => console.error("Image loading error")} // Log if there's an error loading the image
//               />
//             )}
//             <div>
//               <button onClick={() => handleLikePost(post.id)}>
//                 <i className="fa fa-thumbs-up thumbs-up-icon"></i>{" "}
//                 {/* Thumbs up icon */}
//                 <span>{likeCounts[post.id]}</span> {/* Display like count */}
//               </button>
//               <button onClick={() => handleDislikePost(post.id)}>
//                 <i className="fa fa-thumbs-down thumbs-down-icon"></i>{" "}
//                 {/* Thumbs down icon */}
//                 <span>{dislikeCounts[post.id]}</span>{" "}
//                 {/* Display dislike count */}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

import axios from "axios";
import "./Blogs.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const authToken = localStorage.getItem("authToken"); // Assuming you store the authentication token in local storage
  const apiBaseUrl = "http://localhost:3001"; // Replace with your actual API base URL

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/posts`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
      })
      .then(async (response) => {
        // Initialize the like and dislike counts for each post to 0
        const postsWithCounts = response.data.map((post) => ({
          ...post,
          likes_count: 0,
          dislikes_count: 0,
        }));

        setPosts(postsWithCounts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [authToken, apiBaseUrl]);

  // const handleLikePost = async (postId) => {
  //   try {
  //     await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     });

  //     // Update the like count for the post in the state
  //     setPosts((prevPosts) =>
  //       prevPosts.map((post) =>
  //         post.id === postId
  //           ? {
  //               ...post,
  //               likes_count: post.likes_count + 1,
  //             }
  //           : post
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error liking post:", error);
  //   }
  // };
  const handleLikePost = async (postId) => {
    try {
      console.log("Liking post...");
      await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      // Update the like count for the post in the state
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                likes_count: post.likes_count + 1,
              }
            : post
        )
      );
  
      console.log("Post liked successfully");
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };
  

  const handleDislikePost = async (postId) => {
    try {
      await axios.post(`${apiBaseUrl}/posts/${postId}/dislike`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Update the dislike count for the post in the state
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                dislikes_count: post.dislikes_count + 1,
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error disliking post:", error);
    }
  };

  return (
    <div className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-author">By {post.author}</p>
            <div className="post-content">{post.content}</div>
            {post.image_url && (
              <img
                src={`${apiBaseUrl}${post.image_url}`} // Use the absolute image URL
                alt={post.title} // Set an appropriate alt text
                className="post-image"
                onLoad={() => console.log("Image loaded successfully")} // Log when the image is loaded
                onError={() => console.error("Image loading error")} // Log if there's an error loading the image
              />
            )}
            <div>
              <button onClick={() => handleLikePost(post.id)}>
                <i className="fa fa-thumbs-up thumbs-up-icon"></i>{" "}
                {/* Thumbs up icon */}
                <span>{post.likes_count}</span> {/* Display like count */}
              </button>
              <button onClick={() => handleDislikePost(post.id)}>
                <i className="fa fa-thumbs-down thumbs-down-icon"></i>{" "}
                {/* Thumbs down icon */}
                <span>{post.dislikes_count}</span>{" "}
                {/* Display dislike count */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
