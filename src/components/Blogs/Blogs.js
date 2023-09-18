// import React, { useState, useEffect } from "react";
// import "font-awesome/css/font-awesome.min.css";
// import axios from "axios";
// import "./Blogs.css";

// const Blog = ({ currentUserId }) => {
//   const [posts, setPosts] = useState([]);
//   const [expandedPostId, setExpandedPostId] = useState(null);
//   const authToken = localStorage.getItem("authToken");
//   const apiBaseUrl = "https://pizza-api-3.onrender.com";
//   const [commentLikes, setCommentLikes] = useState({});

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
  
//       const commentsData = response.data; // Assuming the response contains an array of comments
  
//       // Initialize comment likes in the state
//       const initialCommentLikes = {};
  
//       // Iterate through the comments and fetch the likes count for each comment
//       for (const comment of commentsData) {
//         // Fetch the likes count for the comment
//         const likeResponse = await axios.get(
//           `${apiBaseUrl}/posts/${postId}/comments/${comment.id}/likes`,
//           {
//             headers: {
//               Authorization: `Bearer ${authToken}`,
//               Accept: "application/json",
//             },
//           }
//         );
  
//         const likesCount = likeResponse.data.likesCount;
  
//         // Update the initialCommentLikes object with the likes count
//         initialCommentLikes[comment.id] = likesCount;
//       }
  
//       // Map the comments to extract user IDs
//       const commentsWithUserIds = commentsData.map((comment) => ({
//         ...comment,
//         userId: comment.user_id, // Extract the user ID
//       }));
  
//       // Update the comments state while preserving existing comments and initialize comment likes
//       setComments((prevComments) => ({
//         ...prevComments,
//         [postId]: commentsWithUserIds,
//       }));
  
//       // Initialize comment likes state
//       setCommentLikes((prevLikes) => ({
//         ...prevLikes,
//         [postId]: initialCommentLikes,
//       }));
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };
  
  

//   const handleCommentSubmit = async (postId) => {
//     try {
//       // Send a POST request to add a new comment
//       const response = await axios.post(
//         `${apiBaseUrl}/posts/${postId}/comments`,
//         { comment: { content: newComment } },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Clear the input field after successful submission
//       setNewComment("");

//       // After adding a new comment, update the comments state with the new comment
//       const newCommentData = response.data; // Assuming the response contains the new comment data
//       setComments((prevComments) => ({
//         ...prevComments,
//         [postId]: [...(prevComments[postId] || []), newCommentData],
//       }));
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

  


//   const handleLikeComment = async (postId, commentId) => {
//     try {
//       // Send a POST request to like the comment
//       await axios.post(
//         `${apiBaseUrl}/posts/${postId}/comments/${commentId}/like`,
//         null,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
  
//       // Fetch the updated likes count after liking the comment
//       const likeResponse = await axios.get(
//         `${apiBaseUrl}/posts/${postId}/comments/${commentId}/likes`,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             Accept: "application/json",
//           },
//         }
//       );
  
//       const updatedLikeCount = likeResponse.data.likesCount;
  
//       setCommentLikes((prevLikes) => ({
//         ...prevLikes,
//         [postId]: {
//           ...prevLikes[postId],
//           [commentId]: updatedLikeCount,
//         },
//       }));
      
//       // Optionally, persist the updated likes count in localStorage
//       const updatedCommentLikes = {
//         ...commentLikes,
//         [postId]: {
//           ...commentLikes[postId],
//           [commentId]: updatedLikeCount,
//         },
//       };
//       localStorage.setItem("commentLikes", JSON.stringify(updatedCommentLikes));
//     } catch (error) {
//       console.error("Error liking comment:", error);
//     }
//   };
  
//   const handleDeleteComment = async (postId, commentId) => {
//     try {
//       // Send a DELETE request to remove the comment
//       await axios.delete(
//         `${apiBaseUrl}/posts/${postId}/comments/${commentId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );

//       console.log("Comment deleted successfully");

//       // Update the UI to remove the deleted comment
//       setComments((prevComments) => ({
//         ...prevComments,
//         [postId]: prevComments[postId].filter(
//           (comment) => comment.id !== commentId
//         ),
//       }));
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   return (
//     <div className="blog">
//       <h2 className="h2">Latest Blog Posts</h2>
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
//                 {console.log("Expanded Post ID:", expandedPostId)}
//                 {console.log("Current Post ID:", post.id)}

//                 <ul>
//                   {comments[post.id] &&
//                     comments[post.id].map((comment, commentIndex) => (
//                       <li key={commentIndex}>
//                         <div className="comment-actions">
//                           <button
//                             class="container1"
//                             onClick={() =>
//                               handleLikeComment(post.id, comment.id)
//                             }
//                           >
//                             Likes{" "}
//                             <span>
//                               {commentLikes[post.id]?.[comment.id] || 0}
//                             </span>
//                             <input checked="checked" type="checkbox" />
//                             <div class="checkmark">
//                               <svg viewBox="0 0 256 256">
//                                 <rect
//                                   fill="none"
//                                   height="256"
//                                   width="256"
//                                 ></rect>
//                                 <path
//                                   d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
//                                   stroke-width="20px"
//                                   stroke="#FFF"
//                                   fill="none"
//                                 ></path>
//                               </svg>
//                             </div>
//                           </button>
//                         </div>
//                         {comment.content}
//                         {console.log(
//                           "Checking condition: ",
//                           comment.user_id,
//                           currentUserId
//                         )}
//                         {(comment.userId === currentUserId ||
//                           !comment.content) && (
//                           <div className="comment-actions">
//                             {console.log(
//                               "Delete button should be displayed here"
//                             )}

//                             <button
//                               class="btn"
//                               onClick={() =>
//                                 handleDeleteComment(post.id, comment.id)
//                               }
//                             >
//                               <p class="paragraph"> delete </p>
//                               <span class="icon-wrapper">
//                                 <svg
//                                   class="icon"
//                                   width="30px"
//                                   height="30px"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
//                                     stroke="#000000"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </button>
//                             <div class="div">
//                               <small>
//                                 <i></i>
//                               </small>
//                             </div>

//                             <div className="div">
//                               <small>
//                                 <i></i>
//                               </small>
//                             </div>
//                           </div>
//                         )}
//                       </li>
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
//                         <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c-4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path>
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

const Blog = ({ currentUserId }) => {
  const [posts, setPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const authToken = localStorage.getItem("authToken");
  const apiBaseUrl = "https://pizza-api-3.onrender.com";
  const [commentLikes, setCommentLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  useEffect(() => {
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
    try {
      await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const likeResponse = await axios.get(
        `${apiBaseUrl}/posts/${postId}/likes`
      );

      const updatedLikeCount = likeResponse.data.likesCount;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                likes_count: updatedLikeCount,
              }
            : post
        )
      );
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

      const dislikeResponse = await axios.get(
        `${apiBaseUrl}/posts/${postId}/dislikes`
      );

      const updatedDislikeCount = dislikeResponse.data.dislikesCount;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                dislikes_count: updatedDislikeCount,
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error disliking post:", error);
    }
  };

  const handlePostClick = (postId) => {
    if (postId === expandedPostId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
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

      const commentsData = response.data;

      const initialCommentLikes = {};

      for (const comment of commentsData) {
        const likeResponse = await axios.get(
          `${apiBaseUrl}/posts/${postId}/comments/${comment.id}/likes`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              Accept: "application/json",
            },
          }
        );

        const likesCount = likeResponse.data.likesCount;

        initialCommentLikes[comment.id] = likesCount;
      }

      const commentsWithUserIds = commentsData.map((comment) => ({
        ...comment,
        userId: comment.user_id,
      }));

      setComments((prevComments) => ({
        ...prevComments,
        [postId]: commentsWithUserIds,
      }));

      setCommentLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: initialCommentLikes,
      }));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    try {
      setIsLoading(true);

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

      setNewComment("");

      const newCommentData = response.data;
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), newCommentData],
      }));

      setIsLoading(false);
    } catch (error) {
      console.error("Error adding comment:", error);
      setIsLoading(false);
    }
  };

  const handleLikeComment = async (postId, commentId) => {
    try {
      await axios.post(
        `${apiBaseUrl}/posts/${postId}/comments/${commentId}/like`,
        null,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const likeResponse = await axios.get(
        `${apiBaseUrl}/posts/${postId}/comments/${commentId}/likes`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        }
      );

      const updatedLikeCount = likeResponse.data.likesCount;

      setCommentLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: {
          ...prevLikes[postId],
          [commentId]: updatedLikeCount,
        },
      }));
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  const handleDeleteComment = async (postId, commentId) => {
    try {
      await axios.delete(
        `${apiBaseUrl}/posts/${postId}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Comment deleted successfully");

      setComments((prevComments) => ({
        ...prevComments,
        [postId]: prevComments[postId].filter(
          (comment) => comment.id !== commentId
        ),
      }));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="blog">
      <h2 className="h2">Latest Blog Posts</h2>
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
                : post.content.slice(0, 200) + " ..."}
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
                      <li key={commentIndex}>
                        <div className="comment-actions">
                          <button
                            class="container1"
                            onClick={() =>
                              handleLikeComment(post.id, comment.id)
                            }
                          >
                            Likes{" "}
                            <span>
                              {commentLikes[post.id]?.[comment.id] || 0}
                            </span>
                            <input checked="checked" type="checkbox" />
                            <div class="checkmark">
                              <svg viewBox="0 0 256 256">
                                <rect
                                  fill="none"
                                  height="256"
                                  width="256"
                                ></rect>
                                <path
                                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                                  stroke-width="20px"
                                  stroke="#FFF"
                                  fill="none"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                        {comment.content}
                        {(comment.userId === currentUserId ||
                          !comment.content) && (
                          <div className="comment-actions">
                            <button
                              class="btn"
                              onClick={() =>
                                handleDeleteComment(post.id, comment.id)
                              }
                            >
                              <p class="paragraph"> delete </p>
                              <span class="icon-wrapper">
                                <svg
                                  class="icon"
                                  width="30px"
                                  height="30px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                            <div class="div">
                              <small>
                                <i></i>
                              </small>
                            </div>

                            <div className="div">
                              <small>
                                <i></i>
                              </small>
                            </div>
                          </div>
                        )}
                      </li>
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
                    {/* Conditionally render the loader */}
                    {isLoading ? <div class="loader"></div> : "Comment"}
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
