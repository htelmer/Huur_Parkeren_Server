"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rentalArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rentalArea.hasMany(models.booking, { foreignKey: "areaId" });

      // problem
      rentalArea.belongsTo(models.user, { foreignKey: "ownerId", as: "owner" });
      rentalArea.belongsToMany(models.user, {
        through: "userFavorites",
        foreignKey: "areaId",
        as: "favorites",
      });
    }
  }
  rentalArea.init(
    {
      city: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      houseNo: DataTypes.STRING,
      availableStartDate: DataTypes.DATE,
      availableEndDate: DataTypes.DATE,
      price: DataTypes.INTEGER,
      latitude: DataTypes.STRING,
      longtitude: DataTypes.STRING,
      availableSpots: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      streetName: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "rentalArea",
    }
  );
  return rentalArea;
};
