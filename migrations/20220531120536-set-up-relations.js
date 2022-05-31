"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("rentedAreas", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rentedAreas", "areaId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rentalAreas",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    /* await queryInterface.addColumn("userFavorites", "userId", {
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
    });*/
    await queryInterface.addColumn("rentalAreas", "ownerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("rentedAreas", "userId");
    await queryInterface.removeColumn("rentedAreas", "areaId");
    //await queryInterface.removeColumn("userFavorites", "userId");
    //await queryInterface.removeColumn("userFavorites", "areaId");
    await queryInterface.removeColumn("rentalAreas", "ownerId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
