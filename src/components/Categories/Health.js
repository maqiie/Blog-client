import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Health = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend for the Health category
    fetch('health_backend_endpoint')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Health' {...blog} />
      ))}
    </div>
  );
};

export default Health;
