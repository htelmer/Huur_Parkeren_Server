"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userFavorite.belongsTo(models.user, { foreignKey: "userId" });
      userFavorite.belongsTo(models.rentalArea, { foreignKey: "areaId" });
      // define association here
    }
  }
  userFavorite.init(
    {
      favorite: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "userFavorite",
    }
  );
  return userFavorite;
};
