import * as actionTypes from "../actionsTypes/actionsTypes";

const initialState = {
  loading: false,
  responseMessage: "",
  error: "",
};

export const editOneUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_ONE_USER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.EDIT_ONE_USER_SUCCED:
      return {
        ...state,
        loading: false,
        responseMessage: action.payload,
      };
    case actionTypes.EDIT_ONE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
