export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("comments");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("comments", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
