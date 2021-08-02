import axios from "axios";
import {
  getUsers,
  getUsersSucced,
  getUsersFailed,
} from "../reduxConfig/actions/getUsersActions";

const getAllUsers = () => async (dispatch) => {
  dispatch(getUsers());
  try {
    const res = await axios.get("allUsers");

    dispatch(getUsersSucced(res.data));
  } catch (error) {
    dispatch(getUsersFailed(error.message));
  }
};

export default getAllUsers;
