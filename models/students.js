// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const LessonsStudents = require('./lessons_students.js');

const Students = sequelize.define(
  'students',
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

module.exports = Students;
