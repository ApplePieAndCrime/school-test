const express = require('express');
const {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require('../services/students');
const router = express.Router();

router.get('/', async function (req, res, next) {
  const where = req.query;
  return res.json(await getAllStudents(where));
});

router.post('/', async function (req, res, next) {
  const data = req.body || {};
  return res.json(await createStudent(data));
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  return res.json(await getStudent(id));
});

router.put('/:id', async function (req, res, next) {
  const { id } = req.params;
  const data = req.body || {};
  return res.json(await updateStudent(id, data));
});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params;
  return res.json(await deleteStudent(id));
});

module.exports = router;
