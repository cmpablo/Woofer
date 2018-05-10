module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO USERS
  const Dogs = sequelize.define("dog", {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    tempermant: {
      type: Sequelize.STRING
    },
    breed: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    },
    imgPath: {
      type: Sequelize.STRING
    }
  });
  return Dogs;
};
