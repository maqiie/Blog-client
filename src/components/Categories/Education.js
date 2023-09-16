// import React, { useState, useEffect } from 'react';
// import './Art.css';
// import BlogCard from './BlogCard';

// const Education = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Fetch blogs from the backend for the Education category
//     fetch('education_backend_endpoint')
//       .then(response => response.json())
//       .then(data => setBlogs(data))
//       .catch(error => console.error('Error fetching blogs:', error));
//   }, []);

//   return (
//     <div className='category-wrapper'>
//       {blogs.map(blog => (
//         <BlogCard key={blog.id} category='Education' {...blog} />
//       ))}
//     </div>
//   );
// };

// export default Education;
import React, { useState, useEffect } from 'react';
import './Art.css';
import BlogCard from './BlogCard';
import axios from 'axios';

const Education = ({ categoryId }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the backend using the dynamic categoryId
    axios.get(`http://localhost:3001/categories/10/posts`) // Use categoryId in the URL
      .then(response => {
        const data = response.data;
        console.log('Fetched data:', data); // Log the fetched data
        setBlogs(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log any errors
      });
  }, [categoryId]); // Add categoryId as a dependency

  console.log('Rendered with categoryId:', categoryId);
  console.log('Rendered with blogs:', blogs);

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category={`Category ID: ${categoryId}`} {...blog} />
      ))}
    </div>
  );
};

export default Education;
