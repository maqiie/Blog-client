
import React, { useState } from 'react';
import './BlogCard.css'; // Import the CSS file for styling

const BlogCard = ({ category, title, intro, likes, comments, date, tags }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`blog-card ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleExpansion}
    >
      <div className='card-header'>
        <h3>{title}</h3>
        <div className='category'>{category}</div>
      </div>
      {isExpanded ? (
        <div className='card-content'>
          <p>{intro}</p>
          {/* Render other content */}
          <div className='footer'>
            <span className='date'>{date}</span>
            <span className='likes'>Likes: {likes}</span>
            <span className='comments'>Comments: {comments}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BlogCard;
