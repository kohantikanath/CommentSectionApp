import React, { useState } from "react";

import "./Comment.css";
import { ReplyComment } from "../ReplyComment";
import { Reply } from "../Reply";

import { useDispatch } from "react-redux";
import { updateComment } from "../../actions/commentActions";

const Comment = ({ name, id, content, replies, lastEdited }) => {
  const [editedComment, setEditedComment] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const dispatch = useDispatch();

  const editComment = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  const saveComment = (event) => {
    event.preventDefault();

    setIsEditing(false);

    dispatch(updateComment(id, content));
  };

  return (
    <>
      <div className="comment">
        <div className="cmt-title">
          <h3>{name}</h3>
          <p>{lastEdited}</p>
        </div>
        <div className="cmt-body">
          {isEditing ? (
            <textarea
              id="editComment"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          ) : (
            <p>{editedComment}</p>
          )}
        </div>
        <div className="cmt-footer">
          <button
            className="btn2"
            onClick={() => {
              setIsReplying(!isReplying);
            }}
          >
            Reply
          </button>
          <button
            className="btn2"
            onClick={isEditing ? saveComment : editComment}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
      {isReplying ? <ReplyComment idx={id} /> : null}
      {replies.length > 0
        ? replies.map((reply) => {
            return (
              <Reply
                key={reply.id}
                cmtIdx={id}
                name={reply.name}
                id={reply.id}
                content={reply.content}
                lastEdited={reply.lastEdited}
              />
            );
          })
        : null}
    </>
  );
};

export default Comment;
