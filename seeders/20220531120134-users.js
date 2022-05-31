"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "test",
          lastName: "user",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          owner: true,
          phone: "0651824051",
        },
        {
          firstName: "dummy",
          lastName: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          owner: false,
          phone: "06454983474",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    // await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
