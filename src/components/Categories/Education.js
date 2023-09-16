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

const Education = () => {
  const [blogs, setBlogs] = useState([]);
  

  useEffect(() => {
    // Replace 'your_category' with the actual category you want to fetch
    const category = 'Education';

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

  console.log('Rendered with blogs:', blogs); // Log the current state of blogs

  return (
    <div className='category-wrapper'>
      {blogs.map(blog => (
        <BlogCard key={blog.id} category='Education' {...blog} />
      ))}
    </div>
  );
};

export default Education;
