import axios from "axios";
import {
  addOneUser,
  addOneUserSucced,
  addOneUserFailed,
} from "../reduxConfig/actions/addOneUser";

import getAllUsers from "./getUsers";

const addOneUserToDb = (userInfo) => async (dispatch) => {
  dispatch(addOneUser);
  try {
    const response = await axios.post("register", userInfo);
    dispatch(addOneUserSucced(response.data));
    dispatch(getAllUsers());
  } catch (error) {
    dispatch(addOneUserFailed(error.message));
  }
};

export default addOneUserToDb;
