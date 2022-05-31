"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class areaOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      areaOwner.belongsTo(models.user);
      areaOwner.belongsTo(models.rentalArea);
      // define association here
    }
  }
  areaOwner.init(
    {
      ownerId: DataTypes.INTEGER,
      areaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "areaOwner",
    }
  );
  return areaOwner;
};
