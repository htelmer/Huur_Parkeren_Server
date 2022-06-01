"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("bookings", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("bookings", "areaId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rentalAreas",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("userFavorites", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("userFavorites", "areaId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rentalAreas",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rentalAreas", "ownerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("bookings", "userId");
    await queryInterface.removeColumn("bookings", "areaId");
    await queryInterface.removeColumn("userFavorites", "userId");
    await queryInterface.removeColumn("userFavorites", "areaId");
    await queryInterface.removeColumn("rentalAreas", "ownerId");
  },
};
