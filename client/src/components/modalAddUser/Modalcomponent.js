import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addOneUserToDb from "../../API_Functions/addOneUserToDb";

import { useDispatch } from "react-redux";

function ModalComponent() {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <MdLibraryAdd
        style={{ width: "2rem", height: "2rem", marginTop: "50%" }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Firstname </span>
            <input
              type="text"
              value={setUserInfo.firstname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, firstname: e.target.value })
              }
            />
            <span>Lastname </span>
            <input
              type="text"
              value={setUserInfo.lastname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, lastname: e.target.value })
              }
            />
            <span>Email </span>
            <input
              type="text"
              value={setUserInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
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
              dispatch(addOneUserToDb(userInfo));
              handleClose();
            }}
          >
            Add user
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;
