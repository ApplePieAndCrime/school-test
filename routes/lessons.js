const express = require('express');
const { createLessonsWithParams } = require('../services/lessons');

const router = express.Router();

router.post('/', async function (req, res, next) {
  const body = req.body || {};
  //   return Students.findAll({ where });
  // console.log({body});
  // console.log({ res });
  res.json(await createLessonsWithParams(body));
});

// router.post('/lessons', function (req, res, next) {
//   const where = res.query;
//   // return Students.findAll({ where });
// });

module.exports = router;
