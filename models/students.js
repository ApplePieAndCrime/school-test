// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const LessonStudents = require('./lesson_students.js');

const Students = sequelize.define(
  'students',
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

module.exports = Students;
