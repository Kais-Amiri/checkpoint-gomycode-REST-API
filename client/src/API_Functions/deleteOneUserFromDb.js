import axios from "axios";
import {
  deleteOneUser,
  deleteOneUserSucced,
  deleteOneUserFailed,
} from "../reduxConfig/actions/deleteOneUser";
import getAllUsers from "./getUsers";

const deleteOneUserFromBd = (id) => async (dispatch) => {
  dispatch(deleteOneUser);
  try {
    const response = await axios.delete(`deleteProfile/${id}`);
    dispatch(deleteOneUserSucced(response.data));
    dispatch(getAllUsers());
  } catch (error) {
    dispatch(deleteOneUserFailed(error.message));
  }
};

export default deleteOneUserFromBd;
