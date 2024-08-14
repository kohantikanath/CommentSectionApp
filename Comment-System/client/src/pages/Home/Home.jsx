import React, { useEffect } from "react";
import "./Home.css";

import { PostComment } from "../../components/PostComment";
import { Comment } from "../../components/Comment";
import { useSelector } from "react-redux";

const Home = () => {
  const comments = useSelector((state) => state.comments.comments);
  useEffect(() => {
    if (JSON.stringify(comments) != localStorage.getItem("comments")) {
        localStorage.setItem("comments", JSON.stringify(comments));
    }
  });

  return (
    <main className="homepage">
      <PostComment />
      {comments.length > 0
        ? comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
              replies={comment.replies}
              lastEdited={comment.lastEdited}
            />
          ))
        : null}
    </main>
  );
};

export default Home;
