// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const { Lessons, Students } = require('./index');

const LessonStudents = sequelize.define(
  'lesson_students',
  // Описание таблиц
  {
    // lesson_id: {
    //   type: DataTypes.INTEGER,
    // },
    // student_id: {
    //   type: DataTypes.INTEGER,
    // },
    visit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = LessonStudents;
