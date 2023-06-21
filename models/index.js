const Students = require('./students');
const Teachers = require('./teachers');
const Lessons = require('./lessons');
const LessonStudents = require('./lesson_students');
const LessonTeachers = require('./lesson_teachers');

Teachers.belongsToMany(Lessons, {
  through: LessonTeachers,
  foreignKey: 'teacher_id',
  otherKey: 'lesson_id',
  as: 'teachers',
});

Lessons.belongsToMany(Teachers, {
  through: LessonTeachers,
  foreignKey: 'lesson_id',
  otherKey: 'teacher_id',
});

Students.belongsToMany(Lessons, {
  through: LessonStudents,
  foreignKey: 'student_id',
  otherKey: 'lesson_id',
});

Lessons.belongsToMany(Students, {
  through: LessonStudents,
  foreignKey: 'lesson_id',
  otherKey: 'student_id',
});

module.exports = {
  Students,
  Teachers,
  Lessons,
  LessonStudents,
  LessonTeachers,
};
