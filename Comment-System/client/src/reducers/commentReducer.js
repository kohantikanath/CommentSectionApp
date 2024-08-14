import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  ADD_REPLY,
  UPDATE_REPLY,
} from "../actions/commentActions";

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case UPDATE_COMMENT:
      const updatedComments = [...state.comments];
      updatedComments[action.payload.idx] = {
        ...updatedComments[action.payload.idx],
        content: action.payload.content,
      };
      return {
        ...state,
        comments: updatedComments,
      };
    case ADD_REPLY:
      const updatedReplies = [...state.comments];
      updatedReplies[action.payload.commentIdx].replies.push(
        action.payload.reply
      );
      return {
        ...state,
        comments: updatedReplies,
      };
    case UPDATE_REPLY:
      const updatedRepliesList = [...state.comments];
      updatedRepliesList[action.payload.commentIdx].replies[
        action.payload.replyIdx
      ] = {
        ...updatedRepliesList[action.payload.commentIdx].replies[
          action.payload.replyIdx
        ],
        content: action.payload.content,
      };
      return {
        ...state,
        comments: updatedRepliesList,
      };
    default:
      return state;
  }
};

export default commentReducer;
