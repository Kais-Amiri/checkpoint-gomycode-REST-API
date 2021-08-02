import * as actionTypes from "../actionsTypes/actionsTypes";

export const addOneUser = () => {
  return {
    type: actionTypes.ADD_ONE_USER,
  };
};

export const addOneUserSucced = (payload) => {
  return {
    type: actionTypes.ADD_ONE_USER_SUCCED,
    payload,
  };
};

export const addOneUserFailed = (payload) => {
  return {
    type: actionTypes.ADD_ONE_USER_FAILED,
    payload,
  };
};
