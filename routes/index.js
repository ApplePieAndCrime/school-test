const express = require('express');
const { getLessonsWithRelations } = require('../services/lessons');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const params = req.query || {};
  console.log({ params });
  return getLessonsWithRelations(params, next).then(data => res.json(data));
});

module.exports = router;
