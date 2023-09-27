import React from "react";



const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-author">By {post.author}</p>
      <div className="post-content">{post.content}</div>
      {/* Add any other details you want to display */}
    </div>
  );
};

export default PostDetail;
