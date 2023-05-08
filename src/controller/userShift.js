const { getUserShift, updateUserShift } = require('../service/userShift');

const getUserController = (req, res) => {
  const { user } = req.params;
  console.log(user);
  const getUser = getUserShift(user);

  res.status(200).json(getUser);
};

const updateUserController = (req, res) => {
  const { body } = req;
  const { user } = req.params;
  console.log("body user", body, user)
  updateUserShift(body, user);
  res.status(201).json( { message: `usuário ${user} criado` });
};

module.exports = {
  getUserController,
  updateUserController,
};
