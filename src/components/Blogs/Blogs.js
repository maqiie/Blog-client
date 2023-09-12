
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

import axios from "axios";
import "./Blogs.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const authToken = localStorage.getItem("authToken");
  const apiBaseUrl = "http://localhost:3001";

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
    try {
      // Send a POST request to like the post
      await axios.post(`${apiBaseUrl}/posts/${postId}/like`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      console.log("Post liked successfully");
  
      // Fetch the updated like count
      const likeResponse = await axios.get(
        `${apiBaseUrl}/posts/${postId}/likes`
      ); // Use the new "likes" route
  
      const updatedLikeCount = likeResponse.data.likesCount;
  
      console.log("Updated Like Count:", updatedLikeCount);
  
      // Update the UI to reflect the new like count
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
      // Send a POST request to dislike the post
      await axios.post(`${apiBaseUrl}/posts/${postId}/dislike`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      console.log("Post disliked successfully");
  
      // Fetch the updated dislike count
      const dislikeResponse = await axios.get(
        `${apiBaseUrl}/posts/${postId}/dislikes`
      ); // Use the new "dislikes" route
  
      const updatedDislikeCount = dislikeResponse.data.dislikesCount;
  
      console.log("Updated Dislike Count:", updatedDislikeCount);
  
      // Update the UI to reflect the new dislike count
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

