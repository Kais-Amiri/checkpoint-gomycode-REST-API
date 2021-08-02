import * as actionTypes from "../actionsTypes/actionsTypes";

const initialState = {
  loading: false,
  responseMessage: "",
  error: "",
};

export const addOneUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ONE_USER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.ADD_ONE_USER_SUCCED:
      return {
        ...state,
        loading: false,
        responseMessage: action.payload,
      };

    case actionTypes.ADD_ONE_USER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
