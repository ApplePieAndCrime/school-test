'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'lessons',
      [
        {
          id: uuidv4(),
          date: '2021-03-03',
          title: 'химия',
          status: true,
        },
        {
          id: uuidv4(),
          date: '2023-09-09',
          title: 'история',
          status: false,
        },
        {
          id: uuidv4(),
          date: '2022-07-07',
          title: 'биология',
          status: true,
        },
        {
          id: uuidv4(),
          date: '2022-01-07',
          title: 'русский',
          status: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('lessons', null, {});
  },
};
