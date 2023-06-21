// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const Lessons = require('./lessons.js');
const Teachers = require('./teachers.js');

const LessonTeachers = sequelize.define(
  'lesson_teachers',
  // Описание таблиц
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    // lesson_id: {
    //   type: DataTypes.INTEGER,
    // },
    // teacher_id: {
    //   type: DataTypes.INTEGER,
    // },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = LessonTeachers;
