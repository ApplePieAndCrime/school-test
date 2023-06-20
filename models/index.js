const Students = require('./students');
const Teachers = require('./teachers');
const Lessons = require('./lessons');
const LessonsStudents = require('./lessons_students');
const LessonsTeachers = require('./lessons_teachers');

Teachers.belongsToMany(Lessons, {
  through: LessonsTeachers,
  foreignKey: 'teacher_id',
  otherKey: 'lesson_id',
  as: 'teachers',
});

Lessons.belongsToMany(Teachers, {
  through: LessonsTeachers,
  foreignKey: 'lesson_id',
  otherKey: 'teacher_id',
});

Students.belongsToMany(Lessons, {
  through: LessonsStudents,
  foreignKey: 'student_id',
  otherKey: 'lesson_id',
});

Lessons.belongsToMany(Students, {
  through: LessonsStudents,
  foreignKey: 'lesson_id',
  otherKey: 'student_id',
});

module.exports = {
  Students,
  Teachers,
  Lessons,
  LessonsStudents,
  LessonsTeachers,
};
