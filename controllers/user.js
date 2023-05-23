import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response) return res.status(404).json({ msg: "User Tidak Di Temukan" });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addUser = async (req, res) => {
  const { name, age, birth, address } = req.body;
  try {
    await User.create({
      name: name,
      age: age,
      birth: birth,
      address: address,
    });
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateUser = async (req, res) => {
  const { name, age, birth, address } = req.body;
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Di Temukan" });
  try {
    await User.update(
      {
        name: name,
        age: age,
        birth: birth,
        address: address,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Di Temukan" });
  try {
    await User.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
