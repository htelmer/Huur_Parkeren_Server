"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("userFavorites", [
      {
        userId: 1,
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        areaId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userFavorites", null, {});
  },
};
