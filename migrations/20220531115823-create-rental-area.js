"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rentalAreas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      streetName: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      houseNo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      availableStartDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      availableEndDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      longtitude: {
        type: Sequelize.STRING,
      },
      availableSpots: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rentalAreas");
  },
};
