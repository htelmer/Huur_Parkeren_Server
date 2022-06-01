"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.booking, { foreignKey: "userId" });

      //
      user.hasMany(models.rentalArea, { foreignKey: "ownerId", as: "owner" });
      user.belongsToMany(models.rentalArea, {
        through: "userFavorites",
        foreignKey: "userId",
        as: "favorites",
      });
      // define association here
    }
  }
  user.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
