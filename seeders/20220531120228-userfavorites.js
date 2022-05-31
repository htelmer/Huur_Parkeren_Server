"use strict";
//const User = require("../models").user;
//const Area = require("../models").rentalarea;

module.exports = {
  async up(queryInterface, Sequelize) {
    // const user2 = await User.findOne({
    //  where: { email: "a@a.com" },
    // });
    //const area1 = await Area.findOne({ where: { postalCode: "3438LR" } });
    /*await queryInterface.bulkInsert(
      "userFavorites",
      [
        {
          favorite: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          areaId: 1,
        },
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    //  ],
    //  {}
    //);
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("userFavorites", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
