import { React, useState } from "react";

import "../PostComment/PostComment.css";
import { useDispatch, useSelector } from "react-redux";
import { addReply } from "../../actions/commentActions";

const ReplyComment = ({ idx }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const [usrname, setUsrname] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmitReply = (event) => {
    event.preventDefault();
    const currentDate = new Date();

    const newReply = {
      id: comments[idx].replies.length,
      name: usrname,
      content: comment,
      lastEdited: currentDate.getTime(),
    };

    dispatch(addReply(idx, newReply));

    setUsrname("");
    setComment("");
  };

  return (
    <div className="post-comment" style={{width:"80%"}}>
      <h2>Reply</h2>
      <form onSubmit={handleSubmitReply}>
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

export default ReplyComment;
