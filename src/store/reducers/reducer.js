const initaleState = {
  name: "asdasd",
  wishes: ["eat", "code"],
};

const reducer = (state = initaleState, action) => {
  if (action.type === "ADD") {
    console.log(action.payload);
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === "SUB") {
    return {
      ...state,
    };
  }
  return state;
};

export default reducer;
