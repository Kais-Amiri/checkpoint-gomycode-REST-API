import * as actionType from "../actionsTypes/actionsTypes";

export const getUsers = () => {
  return {
    type: actionType.GET_All_USERS,
  };
};

export const getUsersSucced = (payload) => {
  return {
    type: actionType.GET_All_USERS_SUCCED,
    payload,
  };
};

export const getUsersFailed = (payload) => {
  return {
    type: actionType.GET_All_USERS_FAILED,
    payload,
  };
};
