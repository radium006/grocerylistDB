'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    item: DataTypes.STRING
  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};