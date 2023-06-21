const express = require('express');
const { createLessonsWithParams } = require('../services/lessons');

const router = express.Router();

router.post('/', async function (req, res, next) {
  const body = req.body || {};
  res.json(await createLessonsWithParams(body));
});

module.exports = router;
