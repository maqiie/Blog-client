import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Travel = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend for the Travel category
    fetch('travel_backend_endpoint')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Travel' {...blog} />
      ))}
    </div>
  );
};

export default Travel;
