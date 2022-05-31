"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rentedArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rentedArea.belongsTo(models.user, { foreignKey: "userId" });
      rentedArea.belongsTo(models.rentalArea, { foreignKey: "areaId" });
      // define association here
    }
  }
  rentedArea.init(
    {
      rented: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "rentedArea",
    }
  );
  return rentedArea;
};
