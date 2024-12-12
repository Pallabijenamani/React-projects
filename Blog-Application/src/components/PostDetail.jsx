/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css"; // Import the dedicated CSS file for PostDetail

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (loading) return <p>Loading post details...</p>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/" className="back-button">
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetail;
