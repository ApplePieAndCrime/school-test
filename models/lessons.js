// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const LessonsStudents = require('./lessons_students.js');
const LessonsTeachers = require('./lessons_teachers.js');
const Students = require('./students.js');
const Teachers = require('./teachers.js');

const Lessons = sequelize.define(
  'lessons',
  // Описание таблиц
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = Lessons;
