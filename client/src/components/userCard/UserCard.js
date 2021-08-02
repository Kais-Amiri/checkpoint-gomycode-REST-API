import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import ModalEditUser from "../modalEditUser/ModalEditUser";
import { useDispatch } from "react-redux";
import deleteOneUserFromBd from "../../API_Functions/deleteOneUserFromDb";

function UserCard(props) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "0.5rem",
        padding: "1%",
        margin: "1%",
      }}
    >
      <h6>{props.user.firstname}</h6>
      <h6>{props.user.lastname}</h6>
      <h6>{props.user.email}</h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ModalEditUser userInfo={props.user} />
        <AiOutlineDelete
          style={{ width: "2em", height: "100%", marginLeft: "20%" }}
          onClick={() => {
            dispatch(deleteOneUserFromBd(props.user._id));
          }}
        />
      </div>
    </div>
  );
}

export default UserCard;
