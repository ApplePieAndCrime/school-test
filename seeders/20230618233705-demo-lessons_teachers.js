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
    const lessons = await queryInterface.sequelize.query(
      'SELECT * FROM lessons'
    );
    const teachers = await queryInterface.sequelize.query(
      'SELECT * FROM teachers'
    );
    console.log({ lessons, teachers });
    const row = (arr, num) => arr[0][num].id;

    console.log({ teacher_id: row(teachers, 0), lesson_id: row(lessons, 0) });

    await queryInterface.bulkInsert(
      'lessons_teachers',
      [
        {
          id: uuidv4(),
          teacher_id: row(teachers, 0),
          lesson_id: row(lessons, 1),
        },
        {
          id: uuidv4(),
          teacher_id: row(teachers, 1),
          lesson_id: row(lessons, 2),
        },
        {
          id: uuidv4(),
          teacher_id: row(teachers, 2),
          lesson_id: row(lessons, 3),
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
    await queryInterface.bulkDelete('lessons_teachers', null, {});
  },
};
