// import React, { useState, useEffect } from "react";
// import Dropzone from "react-dropzone";
// import axios from "axios";
// import "./createpost.css";

// const CreatePost = ({ currentUser }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch categories from the backend and set them to the state
//     axios
//       .get("http://localhost:3001/categories")
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   const handleImageDrop = (acceptedFiles) => {
//     setImages(acceptedFiles);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("post[title]", title);
//     formData.append("post[content]", content);

//     // Ensure the category ID is an integer
//     const categoryId = parseInt(category, 10);
//     formData.append("post[category_id]", categoryId);

//     images.forEach((image) => formData.append("post[images][]", image));

//     // Retrieve the user's authentication token from local storage
//     const authToken = localStorage.getItem('authToken');
//     console.log('Auth Token:', authToken); // Add this line to log the authToken

//     const headers = {
//       'Authorization': `Bearer ${authToken}`,
//       'Content-Type': 'multipart/form-data', // Set the content type for file uploads
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/posts",
//         formData,
//         { headers }
//       );
//       console.log("Post created:", response.data);
//       // Reset form fields
//       setTitle("");
//       setContent("");
//       setCategory("");
//       setImages([]);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div className="create-post">
//       <h2>Create a New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         >
//           <option value="" disabled>
//             Select a category
//           </option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <Dropzone onDrop={handleImageDrop}>
//           {({ getRootProps, getInputProps }) => (
//             <div className="dropzone" {...getRootProps()}>
//               <input {...getInputProps()} />
//               <p>Drag & drop images or click here to select files</p>
//             </div>
//           )}
//         </Dropzone>
//         <br />
//         <button class="fancy" href="#">
//           <span class="top-key"></span>
//           <span class="text">Create Post</span>
//           <span class="bottom-key-1"></span>
//           <span class="bottom-key-2"></span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
// import React, { useState, useEffect } from "react";
// import Dropzone from "react-dropzone";
// import axios from "axios";
// import "./createpost.css";

// const CreatePost = ({ currentUser }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [images, setImages] = useState([]);
//   const [userPosts, setUserPosts] = useState([]);

//   useEffect(() => {
//     // Fetch categories from the backend and set them to the state
//     axios
//       .get("http://localhost:3001/categories")
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });

//     // Fetch the logged-in user's posts from the backend
//     if (currentUser) {
//       const authToken = localStorage.getItem("authToken");
//       const userId = currentUser.id; // Check if currentUser is defined

//       axios
//         .get(`http://localhost:3001/users/${userId}/posts`, {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         })
//         .then((response) => {
//           setUserPosts(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching user posts:", error);
//         });
//     }
//   }, [currentUser]);

//   const handleImageDrop = (acceptedFiles) => {
//     setImages(acceptedFiles);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("post[title]", title);
//     formData.append("post[content]", content);

//     // Ensure the category ID is an integer
//     const categoryId = parseInt(category, 10);
//     formData.append("post[category_id]", categoryId);

//     images.forEach((image) => formData.append("post[images][]", image));

//     // Retrieve the user's authentication token from local storage
//     const authToken = localStorage.getItem("authToken");
//     console.log("Auth Token:", authToken);

//     const headers = {
//       Authorization: `Bearer ${authToken}`,
//       "Content-Type": "multipart/form-data", // Set the content type for file uploads
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/posts",
//         formData,
//         { headers }
//       );
//       console.log("Post created:", response.data);
//       // Reset form fields
//       setTitle("");
//       setContent("");
//       setCategory("");
//       setImages([]);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div className="create-post">
//       <h2>Create a New Post</h2>
// <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="Title"
//     value={title}
//     onChange={(e) => setTitle(e.target.value)}
//     required
//   />
//   <textarea
//     placeholder="Content"
//     value={content}
//     onChange={(e) => setContent(e.target.value)}
//     required
//   />
//   <select
//     value={category}
//     onChange={(e) => setCategory(e.target.value)}
//     required
//   >
//     <option value="" disabled>
//       Select a category
//     </option>
//     {categories.map((category) => (
//       <option key={category.id} value={category.id}>
//         {category.name}
//       </option>
//     ))}
//   </select>
//   <Dropzone onDrop={handleImageDrop}>
//     {({ getRootProps, getInputProps }) => (
//       <div className="dropzone" {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag & drop images or click here to select files</p>
//       </div>
//     )}
//   </Dropzone>
//   <br />
//   <button className="fancy" href="#">
//     <span className="top-key"></span>
//     <span className="text">Create Post</span>
//     <span className="bottom-key-1"></span>
//     <span className="bottom-key-2"></span>
//   </button>
// </form>
//     </div>
//   );
//   <div className="posts">
//     <h3>Your Posts</h3>
//     {userPosts.length === 0 ? (
//       <p>No blogs, start your blogging journey</p>
//     ) : (
//       <div className="blog-cards-container">
//       <ul>
//         {userPosts.map((post) => (
//           <li key={post.id}>
//             <h4>{post.title}</h4>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}
// </div>

// };

// export default CreatePost;
import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import "./createpost.css";

const CreatePost = ({ currentUser }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(true);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  useEffect(() => {
    // Fetch categories from the backend and set them to the state
    axios
      .get("http://localhost:3001/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch the logged-in user's posts from the backend
    if (currentUser) {
      const authToken = localStorage.getItem("authToken");
      const userId = currentUser.id; // Check if currentUser is defined

      axios
        .get(`http://localhost:3001/users/${userId}/posts`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          setUserPosts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error);
        });
    }
  }, [currentUser]);

  const handleImageDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("post[title]", title);
    formData.append("post[content]", content);

    // Ensure the category ID is an integer
    const categoryId = parseInt(category, 10);
    formData.append("post[category_id]", categoryId);

    images.forEach((image) => formData.append("post[images][]", image));

    const getCategoryName = async (categoryId) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/categories/${categoryId}`
        );
        return response.data.name;
      } catch (error) {
        console.error("Error fetching category:", error);
        return "Unknown Category";
      }
    };

    // Retrieve the user's authentication token from local storage
    const authToken = localStorage.getItem("authToken");
    console.log("Auth Token:", authToken);

    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "multipart/form-data", // Set the content type for file uploads
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/posts",
        formData,
        { headers }
      );
      console.log("Post created:", response.data);
      // Reset form fields
      setTitle("");
      setContent("");
      setCategory("");
      setImages([]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const toggleCreatePost = () => {
    setShowCreatePost(!showCreatePost);
  };

  return (
    <div>
      {showCreatePost && (
        <div className="create-post">
          <h2>Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <Dropzone onDrop={handleImageDrop}>
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag & drop images or click here to select files</p>
                </div>
              )}
            </Dropzone>
            <br />
            <button className="fancy" href="#">
              <span className="top-key"></span>
              <span className="text">Create Post</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </form>
        </div>
      )}

      {/* <div className="posts">
        <h3>Your Posts</h3>
        {userPosts.length === 0 ? (
          <p>No blogs, start your blogging journey</p>
        ) : (
          <div className="blog_card">
            {/* <ul>
              {userPosts.map((post, index) => (
                <li key={post.id}>
                  <h4 className="title">{post.title}</h4>
                  <p className="category">Category: {post.category_id}</p>
                  <p className="likes">Likes: {post.likes}</p>
                </li>
              ))}
            </ul> *
            <ul>
              {userPosts.map((post, index) => (
                <li key={post.id}>
                  <h4 className="title">{post.title}</h4>
                  <p className="category"> {getCategoryName(post.category_id)}</p>
                  <p className="likes">Likes: {post.likes}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
      <div className="posts">
  <h3>Your Posts</h3>
  {userPosts.length === 0 ? (
    <p>No blogs, start your blogging journey</p>
  ) : (
    <div className="blog_card">
      <ul>
        {userPosts.map((post, index) => (
          <li key={post.id}>
            <p className="post-number">{index + 1}</p>
            <h4 className="title">{post.title}</h4>
            <h4 className="title">Category: {getCategoryName(post.category_id)}</h4>
            <p className="likes">Likes: {post.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


      <button onClick={toggleCreatePost}>
        {showCreatePost ? "Hide Create Post" : "Show Create Post"}
      </button>
    </div>
  );
};

export default CreatePost;
