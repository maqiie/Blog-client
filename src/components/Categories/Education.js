
// import React, { useState, useEffect } from 'react';
// import './Art.css';
// import BlogCard from './BlogCard';
// import axios from 'axios';

// const Education = ({ categoryId }) => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend using the dynamic categoryId
//     axios.get(`http://localhost:3001/categories/10/posts`) // Use categoryId in the URL
//       .then(response => {
//         const data = response.data;
//         console.log('Fetched data:', data); // Log the fetched data
//         setBlogs(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error); // Log any errors
//       });
//   }, [categoryId]); // Add categoryId as a dependency

//   console.log('Rendered with categoryId:', categoryId);
//   console.log('Rendered with blogs:', blogs);

//   return (
//     <div className='category-wrapper'>
//       {blogs.map(blog => (
//         <BlogCard key={blog.id} category={`Category ID: ${categoryId}`} {...blog} />
//       ))}
//     </div>
//   );
// };

// export default Education;
import React, { useState, useEffect } from 'react';
import './Art.css';
import axios from 'axios';

const Education = ({ categoryId }) => {
  const [blogs, setBlogs] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null); // Track the expanded card's index

  useEffect(() => {
    // Fetch data from the backend using the dynamic categoryId
    axios.get(`http://localhost:3001/categories/10/posts`)
      .then(response => {
        const data = response.data;
        console.log('Fetched data:', data); // Log the fetched data
        setBlogs(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log any errors
      });
  }, [categoryId]);

  console.log('Rendered with categoryId:', categoryId);
  console.log('Rendered with blogs:', blogs);

  // Function to toggle the visibility of the entire post content
  const togglePostVisibility = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <div className='category-wrapper'>
      {blogs.map((blog, index) => (
        <div
          className={`blog-card ${expandedCard === index ? 'expanded' : ''}`}
          key={blog.id}
          onClick={() => togglePostVisibility(index)} // Toggle visibility on click
        >
          <h2>{blog.title}</h2>
          <div className={`post-content ${expandedCard === index ? 'visible' : ''}`}>
            <p>{expandedCard === index ? blog.content : blog.content.slice(0, 200) + '...'}</p>
            {expandedCard === index && blog.image && (
              <img src={blog.image} alt={`Image for ${blog.title}`} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
