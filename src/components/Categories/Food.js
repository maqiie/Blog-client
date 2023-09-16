import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';

const Food = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    // Replace 'food' with the desired category name
    const categoryName = 'food'; // You can change this dynamically based on your needs
  
    // Construct the URL by interpolating the category name
    const categoryUrl = `/categories/${categoryName}`;
  
    // Fetch blogs from the backend for the specified category
    fetch(categoryUrl)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);
  
  

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Food' {...blog} />
      ))}
    </div>
  );
};

export default Food;
