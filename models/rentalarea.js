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
      rentalArea.hasOne(models.rentedArea, { foreignKey: "areaId" });
      rentalArea.hasMany(models.userFavorite, { foreignKey: "areaId" });
      rentalArea.belongsTo(models.user, { foreignKey: "ownerId" });
      rentalArea.belongsToMany(models.user, {
        through: "areaOwners",
        foreignKey: "areaId",
      });
      // define association here
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
    },
    {
      sequelize,
      modelName: "rentalArea",
    }
  );
  return rentalArea;
};
