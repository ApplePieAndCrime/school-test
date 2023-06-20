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
    const students = await queryInterface.sequelize.query(
      'SELECT * FROM students'
    );
    console.log(lessons, students);
    const row = (arr, num) => arr[0][num].id;
    console.log('arr: ' + lessons[0][0].id);

    console.log(
      { student_id: row(students, 0), lesson_id: row(lessons, 0) },
      { student_id: row(students, 1), lesson_id: row(lessons, 1) }
    );

    const createdData = [
      {
        id: uuidv4(),
        student_id: row(students, 0),
        lesson_id: row(lessons, 1),
        visit: true,
      },

      {
        id: uuidv4(),
        student_id: row(students, 1),
        lesson_id: row(lessons, 1),
      },

      {
        id: uuidv4(),
        student_id: row(students, 2),
        lesson_id: row(lessons, 1),
        visit: true,
      },

      {
        id: uuidv4(),
        student_id: row(students, 0),
        lesson_id: row(lessons, 2),
      },

      {
        id: uuidv4(),
        student_id: row(students, 1),
        lesson_id: row(lessons, 2),
        visit: true,
      },

      {
        id: uuidv4(),
        student_id: row(students, 2),
        lesson_id: row(lessons, 2),
      },
    ];

    console.log({ createdData });

    await queryInterface.bulkInsert('lessons_students', createdData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('lessons_students', null, {});
  },
};
