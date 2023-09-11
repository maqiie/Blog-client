import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Education = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend for the Education category
    fetch('education_backend_endpoint')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Education' {...blog} />
      ))}
    </div>
  );
};

export default Education;
