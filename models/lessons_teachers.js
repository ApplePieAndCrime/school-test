// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const Lessons = require('./lessons.js');
const Teachers = require('./teachers.js');

const LessonsTeachers = sequelize.define(
  'lessons_teachers',
  // Описание таблиц
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = LessonsTeachers;
