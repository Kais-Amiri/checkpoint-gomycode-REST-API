import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import UserCard from "./components/userCard/UserCard";
import getAllUsers from "./API_Functions/getUsers";
import Spinner from "./components/spinner/Spinner";

import ModalComponent from "./components/modalAddUser/Modalcomponent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const state = useSelector((state) => state.getUsersReducer);
  const users = state.users;
  const loading = state.loading;

  return loading ? (
    <Spinner />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ModalComponent />
      <div
        className="App"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
        {users.map((el) => (
          <UserCard key={el._id} user={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
