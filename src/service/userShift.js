const { getUserShiftModel } = require("../model/userShift")

const getUserShift = (userID) => {
  const userFound = getUserShiftModel(userID);

  return userFound
}

module.exports = {
  getUserShift
}