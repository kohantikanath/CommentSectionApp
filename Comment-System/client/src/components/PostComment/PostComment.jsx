import React, { useState } from "react";
import "./PostComment.css";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../actions/commentActions";

const PostComment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const [usrname, setUsrname] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const currentDate = new Date();

    const newComment = {
      id: comments.length,
      name: usrname,
      content: comment,
      replies: [],
      lastEdited: currentDate.getTime(),
    };
    dispatch(addComment(newComment));
    
    setUsrname("");
    setComment("");
  };

  return (
    <div className="post-comment">
      <h2>Comment</h2>
      <form onSubmit={handleSubmitComment}>
        <input
          type="text"
          name="usrname"
          id="usrname"
          placeholder="Name"
          value={usrname}
          onChange={(e) => setUsrname(e.target.value)}
          required
        />
        <textarea
          id="comment"
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          POST
        </button>
      </form>
    </div>
  );
};

export default PostComment;
