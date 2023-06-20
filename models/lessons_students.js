// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const { Lessons, Students } = require('./index');

const LessonsStudents = sequelize.define(
  'lessons_students',
  // Описание таблиц
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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

module.exports = LessonsStudents;
