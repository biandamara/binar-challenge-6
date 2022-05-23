'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_user_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game_user_history.init({
    win: DataTypes.STRING,
    lose: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game_user_history',
  });
  return game_user_history;
};