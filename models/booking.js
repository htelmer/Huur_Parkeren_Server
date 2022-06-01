"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      booking.belongsTo(models.user, { foreignKey: "userId" });
      booking.belongsTo(models.rentalArea, { foreignKey: "areaId" });
      // define association here
    }
  }
  booking.init(
    {
      userId: DataTypes.INTEGER,
      areaId: DataTypes.INTEGER,
      tillWhen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
