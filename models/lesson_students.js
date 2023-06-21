// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const { Lessons, Students } = require('./index');

const LessonStudents = sequelize.define(
  'lessons_students',
  // Описание таблиц
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

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
