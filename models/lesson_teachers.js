// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const Lessons = require('./lessons.js');
const Teachers = require('./teachers.js');

const LessonTeachers = sequelize.define(
  'lessons_teachers',
  // Описание таблиц
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = LessonTeachers;
