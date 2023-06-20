const createHttpError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const getRoutes = require('./routes');
const models = require('./models');

require('dotenv').config();

let app = express();

const sequelize = require('./db.js');
const createConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
createConnection();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

getRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('ERRORS......................');
  next(createHttpError(404));
  // res.status(400).json({ d: 'd' });
  return;
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.type('application/json').headers({ my: 'header' });
  res.status(err.status || 500);
  return res.json({ err });
});

var glob = require('glob');

glob.sync('./models/**/*.js').forEach(function (file) {
  require(path.resolve(file));
});

const port = process.env.PORT || '9090';
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
