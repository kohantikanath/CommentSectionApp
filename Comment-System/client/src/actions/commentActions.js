export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const ADD_REPLY = "ADD_REPLY";
export const UPDATE_REPLY = "UPDATE_REPLY";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const updateComment = (idx, content) => ({
  type: UPDATE_COMMENT,
  payload: { idx, content },
});

export const addReply = (commentIdx, reply) => ({
  type: ADD_REPLY,
  payload: { commentIdx, reply },
});

export const updateReply = (commentIdx, replyIdx, content) => ({
  type: UPDATE_REPLY,
  payload: { commentIdx, replyIdx, content },
});
