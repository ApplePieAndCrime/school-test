const { Students } = require('../models');
const { v4: uuidv4 } = require('uuid');

const getAllStudents = where => {
  return Students.findAll({ where });
};

const createStudent = data => {
  return Students.create({ ...data });
};

const getStudent = id => {
  return Students.findAOne({ where: { id } });
};

const updateStudent = (id, data) => {
  return Students.update(data, { where: { id } });
};

const deleteStudent = (id, data) => {
  return Students.delete({ where: { id } });
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
