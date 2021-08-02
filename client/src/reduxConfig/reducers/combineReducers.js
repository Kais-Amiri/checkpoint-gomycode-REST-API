import { combineReducers } from "redux";
import { getUsersReducer } from "./getUsersReducer";
import { addOneUserReducer } from "./addOneUserReducer";
import { editOneUserReducer } from "./editOneUserReducer";
import { deleteOneUserReducer } from "./deleteOneUserReducer";

const reducersCombination = combineReducers({
  getUsersReducer,
  addOneUserReducer,
  editOneUserReducer,
  deleteOneUserReducer,
});

export default reducersCombination;
