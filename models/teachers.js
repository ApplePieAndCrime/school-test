// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const Lessons = require('./lessons.js');
const LessonTeachers = require('./lesson_teachers.js');

const Teachers = sequelize.define(
  'teachers',
  // Описание таблиц
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = Teachers;
