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
      user.hasMany(models.rentedArea, { foreignKey: "userId" });
      user.hasMany(models.userFavorite, { foreignKey: "userId" });
      user.hasMany(models.rentalArea, { foreignKey: "ownerId" });
      user.belongsToMany(models.rentalArea, {
        through: "areaOwners",
        foreignKey: "ownerId",
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
      owner: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
