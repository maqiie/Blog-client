// import React, { useState, useEffect } from "react";
// import "font-awesome/css/font-awesome.min.css";
// import axios from "axios";
// import "./Blogs.css";

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const [expandedPostId, setExpandedPostId] = useState(null); // Track the expanded post
//   const authToken = localStorage.getItem("authToken");
//   const apiBaseUrl = "http://localhost:3001";

//   useEffect(() => {
//     // Fetch blog posts with their like and dislike counts
//     axios
//       .get(`${apiBaseUrl}/posts`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           Accept: "application/json",
//         },
//       })
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, [authToken, apiBaseUrl]);

//   const handleLikePost = async (postId) => {
//     try {
//       // Send a POST request to like the post
//       await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       console.log("Post liked successfully");

//       // Fetch the updated like count
//       const likeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/likes`
//       ); // Use the new "likes" route

//       const updatedLikeCount = likeResponse.data.likesCount;

//       console.log("Updated Like Count:", updatedLikeCount);

//       // Update the UI to reflect the new like count
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? {
//                 ...post,
//                 likes_count: updatedLikeCount,
//               }
//             : post
//         )
//       );
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   const handleDislikePost = async (postId) => {
//     try {
//       // Send a POST request to dislike the post
//       await axios.post(`${apiBaseUrl}/posts/${postId}/dislike`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       console.log("Post disliked successfully");

//       // Fetch the updated dislike count
//       const dislikeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/dislikes`
//       ); // Use the new "dislikes" route

//       const updatedDislikeCount = dislikeResponse.data.dislikesCount;

//       console.log("Updated Dislike Count:", updatedDislikeCount);

//       // Update the UI to reflect the new dislike count
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? {
//                 ...post,
//                 dislikes_count: updatedDislikeCount,
//               }
//             : post
//         )
//       );
//     } catch (error) {
//       console.error("Error disliking post:", error);
//     }
//   }; // Move this closing curly brace to here

//   const handlePostClick = (postId) => {
//     // Toggle the expanded state of the post
//     if (postId === expandedPostId) {
//       // Collapse the post if it's already expanded
//       setExpandedPostId(null);
//     } else {
//       // Expand the clicked post
//       setExpandedPostId(postId);
//     }
//   };

//   return (
//     <div className="blog">
//       <h2>Latest Blog Posts</h2>
//       <div className="post-list">
//         {posts.map((post, index) => (
//           <div
//             key={index}
//             className={`post ${post.id === expandedPostId ? "expanded" : ""}`}
//           >
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-author">By {post.author}</p>
//             <div className="post-content">
//               {post.id === expandedPostId ? post.content : post.content.slice(0, 200) + '...'}
//               {/* Display only a portion of content if not expanded */}
//             </div>
//             {post.image_url && (
//               <img
//                 src={`${apiBaseUrl}${post.image_url}`}
//                 alt={post.title}
//                 className="post-image"
//                 onLoad={() => console.log("Image loaded successfully")}
//                 onError={() => console.error("Image loading error")}
//               />
//             )}
//             <div>
//               <button onClick={() => handleLikePost(post.id)}>
//                 <i className="fa fa-thumbs-up thumbs-up-icon"></i>{" "}
//                 <span>{post.likes_count}</span>
//               </button>
//               <button onClick={() => handleDislikePost(post.id)}>
//                 <i className="fa fa-thumbs-down thumbs-down-icon"></i>{" "}
//                 <span>{post.dislikes_count}</span>
//               </button>
//             </div>
//             {/* Add a "Read More" link to expand/collapse the post */}
//             <div className="read-more" onClick={() => handlePostClick(post.id)}>
//               {post.id === expandedPostId ? "Read Less" : "Read More"}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from "react";
// import "font-awesome/css/font-awesome.min.css";
// import axios from "axios";
// import "./Blogs.css";

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const [expandedPostId, setExpandedPostId] = useState(null); // Track the expanded post
//   const authToken = localStorage.getItem("authToken");
//   const apiBaseUrl = "http://localhost:3001";

//   // State to store comments for each post
//   const [comments, setComments] = useState({});

//   // State for the new comment input
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     // Fetch blog posts with their like and dislike counts
//     axios
//       .get(`${apiBaseUrl}/posts`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           Accept: "application/json",
//         },
//       })
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, [authToken, apiBaseUrl]);

//   const handleLikePost = async (postId) => {
//     try {
//       // Send a POST request to like the post
//       await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       console.log("Post liked successfully");

//       // Fetch the updated like count
//       const likeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/likes`
//       ); // Use the new "likes" route

//       const updatedLikeCount = likeResponse.data.likesCount;

//       console.log("Updated Like Count:", updatedLikeCount);

//       // Update the UI to reflect the new like count
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? {
//                 ...post,
//                 likes_count: updatedLikeCount,
//               }
//             : post
//         )
//       );
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   const handleDislikePost = async (postId) => {
//     try {
//       // Send a POST request to dislike the post
//       await axios.post(`${apiBaseUrl}/posts/${postId}/dislike`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       console.log("Post disliked successfully");

//       // Fetch the updated dislike count
//       const dislikeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/dislikes`
//       ); // Use the new "dislikes" route

//       const updatedDislikeCount = dislikeResponse.data.dislikesCount;

//       console.log("Updated Dislike Count:", updatedDislikeCount);

//       // Update the UI to reflect the new dislike count
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? {
//                 ...post,
//                 dislikes_count: updatedDislikeCount,
//               }
//             : post
//         )
//       );
//     } catch (error) {
//       console.error("Error disliking post:", error);
//     }
//   };

//   const handlePostClick = (postId) => {
//     // Toggle the expanded state of the post
//     if (postId === expandedPostId) {
//       // Collapse the post if it's already expanded
//       setExpandedPostId(null);
//     } else {
//       // Expand the clicked post
//       setExpandedPostId(postId);
//     }
//   };

//   const handleCommentSubmit = async (postId) => {
//     try {
//       // Send a POST request to add a new comment
//       await axios.post(
//         `${apiBaseUrl}/posts/${postId}/comments`,
//         { comment: newComment },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Fetch updated comments and update the state
//       const commentResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/comments`,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             Accept: "application/json",
//           },
//         }
//       );

//       setComments({ ...comments, [postId]: commentResponse.data });
//       setNewComment(""); // Clear the input field after submission
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   return (
//     <div className="blog">
//       <h2>Latest Blog Posts</h2>
//       <div className="post-list">
//         {posts.map((post, index) => (
//           <div
//             key={index}
//             className={`post ${post.id === expandedPostId ? "expanded" : ""}`}
//           >
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-author">By {post.author}</p>
//             <div className="post-content">
//               {post.id === expandedPostId
//                 ? post.content
//                 : post.content.slice(0, 200) + "..."}
//               {/* Display only a portion of content if not expanded */}
//             </div>
//             {post.image_url && (
//               <img
//                 src={`${apiBaseUrl}${post.image_url}`}
//                 alt={post.title}
//                 className="post-image"
//                 onLoad={() => console.log("Image loaded successfully")}
//                 onError={() => console.error("Image loading error")}
//               />
//             )}
//             <div>
//               <button onClick={() => handleLikePost(post.id)}>
//                 <i className="fa fa-thumbs-up thumbs-up-icon"></i>{" "}
//                 <span>{post.likes_count}</span>
//               </button>
//               <button onClick={() => handleDislikePost(post.id)}>
//                 <i className="fa fa-thumbs-down thumbs-down-icon"></i>{" "}
//                 <span>{post.dislikes_count}</span>
//               </button>
//             </div>
//             {/* Add a "Read More" link to expand/collapse the post */}
//             <div className="read-more" onClick={() => handlePostClick(post.id)}>
//               {post.id === expandedPostId ? "Read Less" : "Read More"}
//             </div>

//             {/* Display comments section */}
//             {post.id === expandedPostId && (
//               <div className="comments-section">
//                 <h4>Comments:</h4>
//                 <ul>
//                   {comments[post.id] &&
//                     comments[post.id].map((comment, commentIndex) => (
//                       <li key={commentIndex}>{comment.text}</li>
//                     ))}
//                 </ul>
//                 {/* Add a form to submit new comments */}
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Add a comment..."
//                     value={newComment} // Bind the input value to the newComment state
//                     onChange={(e) => setNewComment(e.target.value)} // Handle input changes
//                   />
//                   {/* <button onClick={() => handleCommentSubmit(post.id)}>
//                     Add Comment
//                   </button> */}
//                   <button class="bookmarkBtn" onClick={() => handleCommentSubmit(post.id)}>
//                     <span class="IconContainer2">
//                       <svg fill="white" viewBox="0 0 512 512" height="1em">
//                         <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path>
//                       </svg>
//                     </span>
//                     <p class="text">Comment</p>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from "react";
// import "font-awesome/css/font-awesome.min.css";
// import axios from "axios";
// import "./Blogs.css";

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const [expandedPostId, setExpandedPostId] = useState(null);
//   const authToken = localStorage.getItem("authToken");
//   const apiBaseUrl = "http://localhost:3001";

//   // State to store comments for each post
//   const [comments, setComments] = useState({});

//   // State for the new comment input
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     // Fetch blog posts with their like and dislike counts
//     axios
//       .get(`${apiBaseUrl}/posts`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           Accept: "application/json",
//         },
//       })
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }, [authToken, apiBaseUrl]);

//   const handleLikePost = async (postId) => {
//     try {
//       // Send a POST request to like the post
//       await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       console.log("Post liked successfully");

//       // Fetch the updated like count
//       const likeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/likes`
//       );

//       const updatedLikeCount = likeResponse.data.likesCount;

//       console.log("Updated Like Count:", updatedLikeCount);

//       // Update the UI to reflect the new like count
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? {
//                 ...post,
//                 likes_count: updatedLikeCount,
//               }
//             : post
//         )
//       );
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   const handleDislikePost = async (postId) => {
//     try {
//       // Send a POST request to dislike the post
//       await axios.post(`${apiBaseUrl}/posts/${postId}/dislike`, null, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       console.log("Post disliked successfully");

//       // Fetch the updated dislike count
//       const dislikeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/dislikes`
//       );

//       const updatedDislikeCount = dislikeResponse.data.dislikesCount;

//       console.log("Updated Dislike Count:", updatedDislikeCount);

//       // Update the UI to reflect the new dislike count
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId
//             ? {
//                 ...post,
//                 dislikes_count: updatedDislikeCount,
//               }
//             : post
//         )
//       );
//     } catch (error) {
//       console.error("Error disliking post:", error);
//     }
//   };

//   const handlePostClick = (postId) => {
//     // Toggle the expanded state of the post
//     if (postId === expandedPostId) {
//       // Collapse the post if it's already expanded
//       setExpandedPostId(null);
//     } else {
//       // Expand the clicked post
//       setExpandedPostId(postId);

//       // Fetch comments for the expanded post
//       fetchComments(postId);
//     }
//   };

//   const fetchComments = async (postId) => {
//     try {
//       const response = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/comments`,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             Accept: "application/json",
//           },
//         }
//       );

//       // Set the comments for the specific post
//       setComments({ ...comments, [postId]: response.data });
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const handleCommentSubmit = async (postId) => {
//     try {

//       axios.post(
//         `${apiBaseUrl}/posts/${postId}/comments`,
//         { content: newComment }, // Make sure you send 'content' instead of 'comment'
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // After adding a new comment, fetch comments for the specific post again
//       fetchComments(postId);

//       // Clear the input field after submission
//       setNewComment("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   return (
//     <div className="blog">
//       <h2>Latest Blog Posts</h2>
//       <div className="post-list">
//         {posts.map((post, index) => (
//           <div
//             key={index}
//             className={`post ${post.id === expandedPostId ? "expanded" : ""}`}
//           >
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-author">By {post.author}</p>
//             <div className="post-content">
//               {post.id === expandedPostId
//                 ? post.content
//                 : post.content.slice(0, 200) + "..."}
//             </div>
//             {post.image_url && (
//               <img
//                 src={`${apiBaseUrl}${post.image_url}`}
//                 alt={post.title}
//                 className="post-image"
//                 onLoad={() => console.log("Image loaded successfully")}
//                 onError={() => console.error("Image loading error")}
//               />
//             )}
//             <div>
//               <button onClick={() => handleLikePost(post.id)}>
//                 <i className="fa fa-thumbs-up thumbs-up-icon"></i>{" "}
//                 <span>{post.likes_count}</span>
//               </button>
//               <button onClick={() => handleDislikePost(post.id)}>
//                 <i className="fa fa-thumbs-down thumbs-down-icon"></i>{" "}
//                 <span>{post.dislikes_count}</span>
//               </button>
//             </div>
//             <div className="read-more" onClick={() => handlePostClick(post.id)}>
//               {post.id === expandedPostId ? "Read Less" : "Read More"}
//             </div>
//             {post.id === expandedPostId && (
//               <div className="comments-section">
//                 <h4>Comments:</h4>
//                 <ul>
//                   {comments[post.id] &&
//                     comments[post.id].map((comment, commentIndex) => (
//                       <li key={commentIndex}>{comment.text}</li>
//                     ))}
//                 </ul>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Add a comment..."
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                   />
//                   <button
//                     className="bookmarkBtn"
//                     onClick={() => handleCommentSubmit(post.id)}
//                   >
//                     <span className="IconContainer2">
//                       <svg fill="white" viewBox="0 0 512 512" height="1em">
//                         <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path>
//                       </svg>
//                     </span>
//                     <p className="text">Comment</p>
//                   </button>
//                 </div>
//               </div>
//             )}
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
  const [expandedPostId, setExpandedPostId] = useState(null);
  const authToken = localStorage.getItem("authToken");
  const apiBaseUrl = "http://localhost:3001";

  // State to store comments for each post
  const [comments, setComments] = useState({});

  // State for the new comment input
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch blog posts with their like and dislike counts
    axios
      .get(`${apiBaseUrl}/posts`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [authToken, apiBaseUrl]);

  const handleLikePost = async (postId) => {
    // ... (same as your existing code)
  };

  const handleDislikePost = async (postId) => {
    // ... (same as your existing code)
  };

  const handlePostClick = (postId) => {
    // Toggle the expanded state of the post
    if (postId === expandedPostId) {
      // Collapse the post if it's already expanded
      setExpandedPostId(null);
    } else {
      // Expand the clicked post
      setExpandedPostId(postId);

      // Fetch comments for the expanded post
      fetchComments(postId);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/posts/${postId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        }
      );

      // Set the comments for the specific post
      setComments({ ...comments, [postId]: response.data });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // const handleCommentSubmit = async (postId) => {
  //   try {
  //     await axios.post(
  //       `${apiBaseUrl}/posts/${postId}/comments`,
  //       { comment: { content: newComment } }, // Wrap the content in a "comment" object
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // After adding a new comment, fetch comments for the specific post again
  //     fetchComments(postId);

  //     // Clear the input field after submission
  //     setNewComment("");
  //   } catch (error) {
  //     console.error("Error adding comment:", error);
  //   }
  // };
  const handleCommentSubmit = async (postId) => {
    try {
      // Send a POST request to add a new comment
      const response = await axios.post(
        `${apiBaseUrl}/posts/${postId}/comments`,
        { comment: { content: newComment } },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      // Clear the input field after successful submission
      setNewComment("");
  
      // After adding a new comment, update the comments state with the new comment
      const newCommentData = response.data; // Assuming the response contains the new comment data
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), newCommentData],
      }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  
  return (
    <div className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`post ${post.id === expandedPostId ? "expanded" : ""}`}
          >
            <h3 className="post-title">{post.title}</h3>
            <p className="post-author">By {post.author}</p>
            <div className="post-content">
              {post.id === expandedPostId
                ? post.content
                : post.content.slice(0, 200) + "..."}
            </div>
            {post.image_url && (
              <img
                src={`${apiBaseUrl}${post.image_url}`}
                alt={post.title}
                className="post-image"
                onLoad={() => console.log("Image loaded successfully")}
                onError={() => console.error("Image loading error")}
              />
            )}
            <div>
              <button onClick={() => handleLikePost(post.id)}>
                <i className="fa fa-thumbs-up thumbs-up-icon"></i>{" "}
                <span>{post.likes_count}</span>
              </button>
              <button onClick={() => handleDislikePost(post.id)}>
                <i className="fa fa-thumbs-down thumbs-down-icon"></i>{" "}
                <span>{post.dislikes_count}</span>
              </button>
            </div>
            <div className="read-more" onClick={() => handlePostClick(post.id)}>
              {post.id === expandedPostId ? "Read Less" : "Read More"}
            </div>
            {post.id === expandedPostId && (
              <div className="comments-section">
                <h4>Comments:</h4>
                <ul>
                  {comments[post.id] &&
                    comments[post.id].map((comment, commentIndex) => (
                      <li key={commentIndex}>{comment.content}</li>
                    ))}
                </ul>
                <div>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    className="bookmarkBtn"
                    onClick={() => handleCommentSubmit(post.id)}
                  >
                    <span className="IconContainer2">
                      <svg fill="white" viewBox="0 0 512 512" height="1em">
                        <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c-4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path>
                      </svg>
                    </span>
                    <p className="text">Comment</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
