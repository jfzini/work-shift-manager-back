const getUserShiftModel = (userID) => {
  const shift = [{
    user: "fulano",
    shift: [
      {
        date: "20230624",
        registers: {
          dailyShift: "0800",
          startShift: "0830",
          startLunch: "1214",
          endLunch: "1322"
        }
      },
      {
      date: "20230625",
      registers: {
        dailyShift: "0800",
        startShift: "0812",
        startLunch: "1200",
        endLunch: "1322"
      }
      },
      {
      date: "20230626",
      registers: {
        dailyShift: "0800",
        startShift: "0930",
        startLunch: "1230",
        endLunch: "1330"
      }
    }]
  },
  {
    user: "cyclano",
    shift: [
      {
        date: "20230624",
        registers: {
          dailyShift: "0800",
          startShift: "0930",
          startLunch: "1314",
          endLunch: "1414"
        }
      },
      {
      date: "20230625",
      registers: {
        dailyShift: "0800",
        startShift: "0850",
        startLunch: "1300",
        endLunch: "1422"
      }
      },
      {
      date: "20230626",
      registers: {
        dailyShift: "0800",
        startShift: "0830",
        startLunch: "1210",
        endLunch: "1320"
      }
    }]
  }
]
const userFound = shift.filter((user) => user.user === userID);
return userFound;
}

module.exports = {
  getUserShiftModel
}