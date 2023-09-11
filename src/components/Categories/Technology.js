import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Technology = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend for the Technology category
    fetch('technology_backend_endpoint')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Technology' {...blog} />
      ))}
    </div>
  );
};

export default Technology;
