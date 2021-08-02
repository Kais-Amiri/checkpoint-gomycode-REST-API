const express = require("express");
const {
  addUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getOneUser,
} = require("../controllers/user.controllers.js");

const Router = express.Router();

Router.post("/register", addUser);
Router.put("/updateProfile/:id", updateUser);
Router.delete("/deleteProfile/:id", deleteUser);
Router.get("/allUsers", getAllUsers);
Router.get("/oneUser/:iden", getOneUser);

module.exports = Router;
