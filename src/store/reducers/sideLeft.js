import * as actionTypes from "../actions/actionTypes";

const initialState = {
  news: [],
  isLoading: false,
  counter: 0,
};

const scrollInit = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};
const scrollSet = (state, action) => {
  return {
    ...state,
    news: action.news,
    counter: 1,
    isLoading: action.isLoading,
  };
};
const scrollAdd = (state, action) => {
  return {
    ...state,
    news: action.news,
    counter: action.counter + 1,
  };
};
const scrollAddStart = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};
const scrollAddSuccess = (state, action) => {
  const updateNews = state.news.concat(action.news);
  const updateState = {
    ...state,
    news: updateNews,
    counter: state.counter + 1,
  };
  return updateState;
};
const scrollFetchFail = (state, action) => {
  return {
    ...state,
    news: "Scroll_FETCH_FAIL",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SCROLL_ADD:
      return scrollAdd(state, action);
    case actionTypes.SCROLL_ADD_START:
      return scrollAddStart(state, action);
    case actionTypes.SCROLL_SET:
      return scrollSet(state, action);
    case actionTypes.SCROLL_ADD_SUCCESS:
      return scrollAddSuccess(state, action);
    case actionTypes.SCROLL_FETCH_FAIL:
      return scrollFetchFail(state, action);
    case actionTypes.SCROLL_INIT:
      return scrollInit(state, action);
    default:
      return state;
  }
};

export default reducer;
