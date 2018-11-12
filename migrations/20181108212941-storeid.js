'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'items',
      'storeID',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "stores",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return
  }
};
