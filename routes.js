const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const lessonsRouter = require('./routes/lessons');

const getRoutes = app => {
  app.use('/', indexRouter);
  app.use('/students', studentsRouter);
  app.use('/teachers', teachersRouter);
  app.use('/lessons', lessonsRouter);
};

module.exports = getRoutes;
