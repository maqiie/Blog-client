

import React, { useState, useEffect } from 'react';
import './Art.css'; // Update the CSS file name
import axios from 'axios';

const Sports = ({ categoryId }) => {
  const [blogs, setBlogs] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null); // Track the expanded card's index

  // Define the togglePostVisibility function
  const togglePostVisibility = (index) => {
    if (expandedCard === index) {
      // If the clicked card is already expanded, close it
      setExpandedCard(null);
    } else {
      // Expand the clicked card and close others
      setExpandedCard(index);
    }
  };

  useEffect(() => {
    // Fetch data from the backend using the dynamic categoryId
    axios
      .get(`https://blog-api0.onrender.com/categories/5/posts`)
      .then((response) => {
        const data = response.data.map((blog) => ({
          id: blog.id,
          title: blog.title,
          content: blog.content,
          image: blog.image_url, // Assuming image_url contains the image URL
        }));
        console.log('Fetched data:', data); // Log the fetched data
        setBlogs(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log any errors
      });
  }, [categoryId]);

  return (
    <div className="education-wrapper"> {/* Update the class name */}
      {blogs.map((blog, index) => (
        <div
          className={`blog-card ${expandedCard === index ? 'expanded' : ''}`}
          key={blog.id}
          onClick={() => togglePostVisibility(index)} // Toggle visibility on click
        >
          <h2>{blog.title}</h2>
          <div className={`post-content ${expandedCard === index ? 'visible' : ''}`}>
            <p>{expandedCard === index ? blog.content : blog.content.slice(0, 200) + '...'}</p>
            {blog.image && (
              <img src={blog.image} alt={`Image for ${blog.title}`} className="blog-image" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;
