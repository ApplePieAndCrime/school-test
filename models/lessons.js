// Db
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');
const LessonStudents = require('./lesson_students.js');
const LessonTeachers = require('./lesson_teachers.js');
const Students = require('./students.js');
const Teachers = require('./teachers.js');

const Lessons = sequelize.define(
  'lessons',
  // Описание таблиц
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    title: {
      type: DataTypes.CHAR(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  // Опции
  {
    timestamps: false,
  }
);

module.exports = Lessons;
