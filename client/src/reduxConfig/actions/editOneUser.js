import * as actionTypes from "../actionsTypes/actionsTypes";

export const editOneUser = () => {
  return {
    type: actionTypes.EDIT_ONE_USER,
  };
};

export const editOneUserSucced = (payload) => {
  return {
    type: actionTypes.EDIT_ONE_USER_SUCCED,
    payload,
  };
};

export const editOneUserFailed = (payload) => {
  return {
    type: actionTypes.EDIT_ONE_USER_FAILED,
    payload,
  };
};
