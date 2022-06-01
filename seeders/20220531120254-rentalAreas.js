"use strict";
const User = require("../models").user;

module.exports = {
  async up(queryInterface, Sequelize) {
    const owner1 = await User.findOne({
      where: { email: "test@test.com" },
    });
    await queryInterface.bulkInsert(
      "rentalAreas",
      [
        {
          city: "Nieuwegein",
          postalCode: "3438LR",
          createdAt: new Date(),
          updatedAt: new Date(),
          houseNo: "31",
          availableStartDate: new Date(),
          availableEndDate: new Date(),
          price: 100,
          latitude: "35",
          longtitude: "35",
          availableSpots: 2,
          ownerId: owner1.id,
          description: "It is available for two months from 1st of July",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG",
        },
      ],
      {}
    );
    /* Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rentalAreas", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
