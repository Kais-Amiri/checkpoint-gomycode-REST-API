import * as actionTypes from "../actionsTypes/actionsTypes";

const initilaState = {
  loading: false,
  responseMessage: "",
  error: "",
};

export const deleteOneUserReducer = (state = initilaState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ONE_USER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.DELETE_ONE_USER_SUCCED:
      return {
        ...state,
        loading: false,
        responseMessage: action.payload,
      };

    case actionTypes.DELETE_ONE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
