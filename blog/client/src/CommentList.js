import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setcomments] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setcomments(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedComments = comments.map((comments) => {
    return <li key={comments.id}>{comments.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
