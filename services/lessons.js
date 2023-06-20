const createHttpError = require('http-errors');
const moment = require('moment');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const sequelize = require('../db');
const Op = Sequelize.Op;
const QueryTypes = Sequelize;
const { Lessons, Teachers, LessonsTeachers, Students } = require('../models');

const arrayError = createHttpError.BadRequest(
  'the number of elements cannot be more than 2'
);

const getLessonsWithRelations = async (params, next) => {
  let {
    date = '',
    status,
    teacherIds = '""',
    studentsCount = '',
    page = 1,
    lessonsPerPage = 5,
  } = params;

  date = date.split(',');

  studentsCount = studentsCount.split(',');

  teacherIds = JSON.parse(teacherIds) || [];

  let where = {};

  if (status)
    where = { ...where, 'lessons.status': status === 'true' ? true : false };

  if (date[0] != '') {
    if (date.length == 1) {
      where = { ...where, 'lessons.date': date[0] };
    } else if (date.length == 2) {
      where = {
        ...where,
        'lessons.date': `# BETWEEN '${date[0]}' AND '${date[1]}'`,
      };
    }
    next(arrayError);
  }

  if (teacherIds.length) {
    where = { ...where, 'teachers.id': `ANY(ARRAY${teacherIds})` };
  }

  if (studentsCount[0] != '') {
    const subquery = `SELECT COUNT(*) as studentsCount FROM students as s inner join lessons_students as ls on s.id=ls.student_id where ls.lesson_id=lessons.id`;
    if (studentsCount.length == 1) {
      where = {
        ...where,
        '': `# (${subquery}) = ${studentsCount[0]}`,
      };
    } else if (studentsCount.length == 2) {
      where = {
        ...where,
        '': `# (${subquery}) BETWEEN ${studentsCount[0]} AND ${studentsCount[1]}`,
      };
    }
    next(arrayError);
  }

  console.log({ where, entries: Object.entries(where) });

  // where['lessons.visitCount'] = '2';
  /*
  # - чистый sql запрос
  ! - перевод в строку
  */
  const whereString = Object.entries(where)
    .map(([key, val]) => {
      if (val.substring(0, 1) == '#') return `${key} ${val.substring(2)}`;
      val = val.substring(0, 1) == '!' ? `'${val.substring(2)}'` : val;
      return `${key} = ${val}`;
    })
    .reduce((prev, current) => (prev ? `${prev} AND ${current}` : current), '');

  console.log({ whereString });

  const data = await Lessons.findAll({
    where: sequelize.literal(whereString),
    offset: page,
    limit: lessonsPerPage,
    include: [{ model: Teachers }, { model: Students }],
    attributes: [
      'id',
      'date',
      'title',
      'status',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM students as s inner join lessons_students as ls on s.id=ls.student_id where ls.lesson_id=lessons.id)'
        ),
        'studentsCount',
      ],
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM students as s inner join lessons_students as ls on s.id=ls.student_id where ls.lesson_id=lessons.id and ls.visit=true)'
        ),
        'visitCount',
      ],
    ],
  });
  return data;
};

const createLessonsWithParams = async params => {
  const {
    teacherIds = [],
    title = '',

    firstDate,
    lessonsCount,
  } = params;
  let { days: weekDaysStack = [], lastDate } = params;

  console.log({ params });

  if (lessonsCount & lastDate) {
    next(
      createHttpError.BadRequest(
        'mutually exclusive options: lessonsCount or lastDate'
      )
    );
  }

  let createdLessons = [];

  let date = moment(firstDate).toDate();
  let weekDay = moment(firstDate).day();

  const replaceDaysStackToCurrent = (stack, current_day) => {
    const ind = stack.indexOf(current_day);
    let temp = stack.splice(0, ind);
    stack.push(...temp);
  };
  replaceDaysStackToCurrent(weekDaysStack, weekDay);

  const generateData = async (date, lastDate, counter = 300) => {
    for (
      let less_num = 0;
      less_num < counter &&
      new Date(date).getTime() <= new Date(lastDate).getTime();
      less_num++
    ) {
      // console.log( { date, weekDaysStack, weekDay });
      const id = uuidv4();
      createdLessons.push(id);

      let nextWeekDay = weekDaysStack.shift();
      const addedDays = Math.abs(nextWeekDay - weekDay);
      date = moment(`${date}`).add(addedDays, 'd').toDate();
      weekDaysStack.push(nextWeekDay);
      weekDay = nextWeekDay;

      await Lessons.create({ id, title, date }).then(() => {
        if (teacherIds.length) {
          return Promise.map(teacherIds, teacherId =>
            LessonsTeachers.create({
              id: uuidv4(),
              teacher_id: teacherId,
              lesson_id: id,
            })
          );
        }
      });
    }
  };

  if (lessonsCount) {
    let lastDateByCondition = moment(date).add(1, 'Y').toDate();
    await generateData(date, lastDateByCondition, lessonsCount);
  }

  if (lastDate) {
    lastDate = moment(lastDate).toDate();
    await generateData(date, lastDate);
  }

  return createdLessons;
};

module.exports = { getLessonsWithRelations, createLessonsWithParams };
