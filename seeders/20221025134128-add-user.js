'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Karen',
        email: 'kv@misena.edu.co',
        password: '1234'
      },
      {
        name: 'Lola',
        email: 'lola@misena.edu.co',
        password: '5678'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {}); 
  }
};
