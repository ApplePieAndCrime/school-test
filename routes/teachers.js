const express = require('express');
const {
  getAllTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} = require('../services/teachers');
const router = express.Router();

router.get('/', async function (req, res, next) {
  const where = req.query;
  console.log({ where });
  return res.json(await getAllTeachers(where));
});

router.post('/', async function (req, res, next) {
  const data = req.body || {};
  return res.json(await createTeacher(data));
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  return res.json(await getTeacher(id));
});

router.put('/:id', async function (req, res, next) {
  const { id } = req.params;
  const data = req.body || {};
  return res.json(await updateTeacher(id, data));
});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params;
  return res.json(await deleteTeacher(id));
});

module.exports = router;
