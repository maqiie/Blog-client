import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Fashion = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend for the Fashion category
    fetch('fashion_backend_endpoint')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Fashion' {...blog} />
      ))}
    </div>
  );
};

export default Fashion;
