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

// Lessons.associate = models => {
//   Lessons.hasMany(models['teachers'], {
//     as: 'tea2',
//     through: LessonsTeachers,
//     foreignKey: 'lesson_id',
//   });
// };

// Lessons.belongsToMany(Teachers, {
//   as: 'lessons',
//   through: LessonsTeachers,
//   foreignKey: 'teacher_id',
// });

// Teachers.belongsToMany(Lessons, {
//   as: 'teachers',
//   through: LessonsTeachers,
//   foreignKey: 'teacher_id',
// });

// Lessons.hasOne(LessonsStudents, { foreignKey: { name: 'lesson_id' } });

// Lessons.hasOne(LessonsStudents);
// Lessons.hasOne(LessonsTeachers);
// Lessons.belongsToMany(Teachers, {
//   through: 'lessons_teachers',
//   as: 'teachers',
// });
// Lessons.belongsToMany(Students, {
//   through: 'lessons_students',
//   foreignKey: 'lessons_id',
//   as: 'students',
// });

// Lessons.belongsToMany()

module.exports = Lessons;
