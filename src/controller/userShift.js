const { getUserShift } = require("../service/userShift")

const getUserController = (req, res) => {
  const { user } = req.params
  console.log(user);
  const getUser = getUserShift(user);

  res.status(200).json(getUser)
}

module.exports = {
  getUserController
}