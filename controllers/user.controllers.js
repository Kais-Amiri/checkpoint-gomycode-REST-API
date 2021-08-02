const user = require("../models/userSchema");

//----------Add a user to the database--------------------------------

const addUser = async (req, res) => {
  try {
    const newUser = await new user({ ...req.body });
    const searchResult = await user.findOne({ email: newUser.email });
    if (!searchResult) {
      await newUser.save();
      res.status(202).json({ msg: "user added successfully !!!" });
    } else {
      res
        .status(402)
        .json({ msg: "email already exist, please change the email !!!!" });
    }
  } catch (error) {
    res.status(402).json(error._message);
  }
};

//------------update a user inforation------------------------------

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userInfoUpdate = await user.findByIdAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    );
    res
      .status(203)
      .json({ msg: "user updated successfully !!!", userInfoUpdate });
  } catch (error) {
    res.status(403).json(error._message);
  }
};

//-----------------delete a user -------------------------------------------

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await user.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "tfassi5" });
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//----------------- get all users------------------------------------------
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(405).json(error._message);
  }
};

//---------------- get one user --------------------------------------------

const getOneUser = async (req, res) => {
  try {
    const id = req.params.iden;
    const oneUser = await user.findOne({ _id: id });
    res.status(202).json(oneUser);
  } catch (error) {
    res.status(402).json(error._message);
  }
};

module.exports = { addUser, updateUser, deleteUser, getAllUsers, getOneUser };
