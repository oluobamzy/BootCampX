const {Pool} = require('pg');

const pool = new Pool({
  user:'labber',
  password:'labber',
  host:'localhost',
  database:'bootcampx'
});

const args1 = process.argv[2];
// console.log(args1, args2);
pool.query(
  
  `
  SELECT DISTINCT teachers.name AS teacher,
  cohorts.name AS cohort
  FROM 
  assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${args1}%'
  ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});