import * as actionTypes from "../actionsTypes/actionsTypes";

export const deleteOneUser = () => {
  return {
    type: actionTypes.DELETE_ONE_USER,
  };
};

export const deleteOneUserSucced = (payload) => {
  return {
    type: actionTypes.DELETE_ONE_USER_SUCCED,
    payload,
  };
};

export const deleteOneUserFailed = (payload) => {
  return {
    type: actionTypes.DELETE_ONE_USER_FAILED,
    payload,
  };
};
