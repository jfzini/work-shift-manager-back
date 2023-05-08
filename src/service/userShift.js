const { getUserShiftModel, updateUserShiftModel } = require('../model/userShift');

const getUserShift = (userID) => {
  const userFound = getUserShiftModel(userID);

  return userFound;
};

const updateUserShift = (body, user) => {
  const { SHIFT_START, BREAK_START, BREAK_END, SHIFT_END } = body;
  const properObj = {
    user: user,
    registers: {
      startShift: SHIFT_START,
      startLunch: BREAK_START,
      endLunch: BREAK_END,
      shiftEnd: SHIFT_END,
    }
  }
  const userFound = updateUserShiftModel(properObj);

  return userFound.user;
};

module.exports = {
  getUserShift,
  updateUserShift,
};
