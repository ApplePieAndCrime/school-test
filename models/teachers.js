// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const Lessons = require('./lessons.js');
const LessonsTeachers = require('./lessons_teachers.js');

const Teachers = sequelize.define(
  'teachers',
  // Описание таблиц
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = Teachers;
