const Teachers = require('../models/teachers');
const { v4: uuidv4 } = require('uuid');

const getAllTeachers = where => {
  return Teachers.findAll({ where });
};

const createTeacher = data => {
  return Teachers.create({ id: uuidv4(), ...data });
};

const getTeacher = id => {
  return Teachers.findOne({ where: { id } });
};

const updateTeacher = (id, data) => {
  return Teachers.update(data, { where: { id } });
};

const deleteTeacher = (id, data) => {
  return Teachers.delete({ where: { id } });
};

module.exports = {
  getAllTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
};
