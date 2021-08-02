import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";
import editOneUserInDb from "../../API_Functions/editOneUserInDb";

function ModalEditUser(props) {
  const dispatch = useDispatch();
  const [userInfoUpdated, setUserInfo] = useState({
    firstname: props.userInfo.firstname,
    lastname: props.userInfo.lastname,
    email: props.userInfo.email,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FiEdit
        style={{ width: "1.5em", height: "80%", marginRight: "20%" }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit informations of {props.userInfo.firstname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Firstname </span>
            <input
              type="text"
              value={userInfoUpdated.firstname}
              onChange={(e) =>
                setUserInfo({ ...userInfoUpdated, firstname: e.target.value })
              }
            />
            <span>Lastname </span>
            <input
              type="text"
              value={userInfoUpdated.lastname}
              onChange={(e) =>
                setUserInfo({ ...userInfoUpdated, lastname: e.target.value })
              }
            />
            <span>Email </span>
            <input
              type="text"
              value={userInfoUpdated.email}
              onChange={(e) =>
                setUserInfo({ ...userInfoUpdated, email: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editOneUserInDb(userInfoUpdated, props.userInfo._id));
              handleClose();
            }}
          >
            Edit user
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEditUser;
