import * as actionsTypes from "../actionsTypes/actionsTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_All_USERS:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.GET_All_USERS_SUCCED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case actionsTypes.GET_All_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
