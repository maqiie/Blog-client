import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Fashion = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace 'your_category' with the actual category you want to fetch
    const category = 'Fashion';

    // Fetch blogs from the backend for the specified category
    fetch(`http://localhost:3001/posts/category/${category}`) // Update the endpoint path
    
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setBlogs(data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error); // Log any errors
      });
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
