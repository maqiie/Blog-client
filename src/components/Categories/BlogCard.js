// import React, { useState } from 'react';
// import "./BlogCard.css";

// const BlogCard = ({ category, title, intro, likes, comments, date, tags }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       className={`blog-card spring-fever ${isExpanded ? 'expanded' : ''}`}
//       onClick={toggleExpansion}
//     >
//       <div className='title-content'>
//         <h3>
//           <a href='#'>{title}</a>
//         </h3>
//         <div className='intro'>
//           <a href='#'>{category}</a> {/* Show the category */}
//         </div>
//       </div>
//       {isExpanded ? (
//         <div className='full-content'>
//           <p>{intro}</p>
//           {/* ... Render other content */}
//           <a href='#'>Read more</a>
//         </div>
//       ) : null}
//       <div className='utility-info'>
//         {/* Render utility info */}
//         {isExpanded && <a href='#'>Read more</a>}
//       </div>
//       <div className='gradient-overlay'></div>
//       <div className='color-overlay'></div>
//     </div>
//   );
// };

// export default BlogCard;
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
