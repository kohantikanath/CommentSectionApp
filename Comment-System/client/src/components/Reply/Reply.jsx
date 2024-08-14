import React, { useState } from "react";

import "../Comment/Comment.css";

import { useDispatch } from "react-redux";
import { updateReply } from "../../actions/commentActions";

const Reply = ({ cmtIdx, name, id, content, lastEdited }) => {
  const [reply, setEditedReply] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const editReply = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  const saveReply = (event) => {
    event.preventDefault();

    setIsEditing(false);

    dispatch(updateReply(cmtIdx, id, content));
  };

  return (
    <>
      <div className="comment" style={{ width: "80%" }}>
        <div className="cmt-title">
          <h3>{name}</h3>
          <p>{lastEdited}</p>
        </div>
        <div className="cmt-body">
          {isEditing ? (
            <textarea
              id="editComment"
              value={reply}
              onChange={(e) => setEditedReply(e.target.value)}
            />
          ) : (
            <p>{reply}</p>
          )}
        </div>
        <div className="cmt-footer">
          <button className="btn2" onClick={isEditing ? saveReply : editReply}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Reply;
