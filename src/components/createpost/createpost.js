import React, { useState, useEffect, useRef } from "react";
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
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type) => {
    const newNotification = { message, type };
    setNotifications([...notifications, newNotification]);
  };

  const forceUpdate = useRef(0);

  const handleForceUpdate = () => {
    forceUpdate.current += 1;
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  useEffect(() => {
    // Fetch categories from the backend and set them to the state
    axios
      .get("https://blog-api-y76j.vercel.app/categories")
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
        .get(`https://blog-api-y76j.vercel.app/users/${userId}/posts`, {
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
    handleForceUpdate();
  }, [currentUser]);

  const handleImageDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("post[title]", title);
    formData.append("post[content]", content);
    const categoryId = parseInt(category, 10);
    formData.append("post[category_id]", categoryId);
    images.forEach((image) => formData.append("post[images][]", image));

    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(
        "https://blog-api-y76j.vercel.app//posts",
        formData,
        { headers }
      );

      console.log("Post created:", response.data);

      // Reset form fields after successful post creation
      setTitle("");
      setContent("");
      setCategory("");
      setImages([]);

      

      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error("Error creating post:", error);
    }
    addNotification("Post created", "success");
  };

  const handleDeletePost = (userId, postId) => {
    console.log("Deleting post with userId:", userId, "and postId:", postId);

    // Construct the DELETE request URL with both userId and postId
    axios
      .delete(`https://blog-api-y76j.vercel.app/users/${userId}/posts/${postId}`)
      .then((response) => {
        // Handle success
        console.log("Post deleted successfully");
        // You can perform additional actions here, like updating the UI
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting post:", error);
        // You can display an error message or handle the error in another way
      });
    addNotification("Post deleted", "success");
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
      <div className="notifications">
        {notifications.map((notification, index) => (
          <div key={index} className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        ))}
      </div>

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
                  <h4 className="title">
                    Category: {getCategoryName(post.category_id)}
                  </h4>
                  <p className="likes">Likes: {post.likes}</p>

                  <button
                    class="btn1"
                    onClick={() => handleDeletePost(currentUser.id, post.id)}
                  >
                    <svg
                      viewBox="0 0 15 17.5"
                      height="17.5"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                    >
                      <path
                        transform="translate(-2.5 -1.25)"
                        d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                        id="Fill"
                      ></path>
                    </svg>
                  </button>
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
