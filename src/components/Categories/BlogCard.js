import React, { useState } from 'react';

const BlogCard = ({ category, title, intro, likes, comments, date, tags }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`blog-card spring-fever ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleExpansion}
    >
      <div className='title-content'>
        <h3>
          <a href='#'>{title}</a>
        </h3>
        <div className='intro'>
          <a href='#'>{category}</a> {/* Show the category */}
        </div>
      </div>
      {isExpanded ? (
        <div className='full-content'>
          <p>{intro}</p>
          {/* ... Render other content */}
          <a href='#'>Read more</a>
        </div>
      ) : null}
      <div className='utility-info'>
        {/* Render utility info */}
        {isExpanded && <a href='#'>Read more</a>}
      </div>
      <div className='gradient-overlay'></div>
      <div className='color-overlay'></div>
    </div>
  );
};

export default BlogCard;
