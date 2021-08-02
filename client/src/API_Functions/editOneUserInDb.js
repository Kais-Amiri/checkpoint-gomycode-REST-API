import axios from "axios";
import {
  editOneUser,
  editOneUserSucced,
  editOneUserFailed,
} from "../reduxConfig/actions/editOneUser";
import getAllUsers from "./getUsers";

const editOneUserInDb = (userInfoUpdated, id) => async (dispatch) => {
  dispatch(editOneUser);
  try {
    const response = await axios.put(`updateProfile/${id}`, userInfoUpdated);
    dispatch(editOneUserSucced(response.data));
    dispatch(getAllUsers());
  } catch (error) {
    dispatch(editOneUserFailed(error.message));
  }
};

export default editOneUserInDb;
