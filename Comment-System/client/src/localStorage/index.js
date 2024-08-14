export const saveToLocalStorage = (data) => {
  let comments = JSON.parse(localStorage.getItem("comment") || "[]");
  comments.push(data);
  localStorage.setItem("comment", JSON.stringify(comments));
};

export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("comment")) || [];
};

export const updateLocalStorage = (idx, data) => {
  let comments = JSON.parse(localStorage.getItem("comment") || "[]");

  if (idx >= 0 && idx < comments.length) {
    comments[idx] = { ...comments[idx], content: data };

    localStorage.setItem("comment", JSON.stringify(comments));
  } else {
    console.error("Invalid index: Unable to update comment.");
  }
};

export const saveToLocalStorageReply = (commentIdx, data) => {
  let comments = JSON.parse(localStorage.getItem("comment") || "[]");
  if (commentIdx >= 0 && commentIdx < comments.length) {
    comments[commentIdx].replies.push(data);
    localStorage.setItem("comment", JSON.stringify(comments));
  } else {
    console.error("Invalid index: Unable to reply to the comment.");
  }
};

export const updateLocalStorageReply = (commentIdx, idx, data) => {
  let comments = JSON.parse(localStorage.getItem("comment") || "[]");
  comments[commentIdx].replies[idx] = { ...comments[commentIdx].replies[idx], content: data };
  localStorage.setItem("comment", JSON.stringify(comments));
};
