import * as actionTypes from "./actionTypes";
import axios from "axios";

export const scrollAdd = (number) => {
  console.log(number);
  return (dispatch) => {
    axios
      .post("http://103.119.92.85:5000/news/scrollNews", {
        number: number,
      })
      .then((response) => {
        dispatch(scrollAddSuccess(response.data));
      })
      .catch((error) => {
        dispatch(scrollFetchFail());
      });
  };
};
export const scrollAddSuccess = (data) => {
  return {
    type: actionTypes.SCROLL_ADD_SUCCESS,
    news: data,
    isLoading: false,
  };
};
export const scrollFetchFail = () => {
  return {
    type: actionTypes.SCROLL_FETCH_FAIL,
  };
};
export const scrollAddStart = () => {
  return {
    type: actionTypes.SCROLL_ADD_START,
    isLoading: true,
  };
};

export const scrollSet = (data) => {
  return {
    type: actionTypes.SCROLL_SET,
    news: data,
    isLoading: false,
  };
};
export const scrollInit = () => {
  console.log("start");
  return (dispatch) => {
    axios
      .post("http://103.119.92.85:5000/news/scrollNews", {
        number: 1,
      })
      .then((response) => {
        dispatch(scrollAddSuccess(response.data));
      })
      .catch((error) => {
        dispatch(scrollFetchFail());
      });
  };
};
