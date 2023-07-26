const {Pool} = require('pg');

const pool = new Pool({
  user:'labber',
  password:'labber',
  host:'localhost',
  database:'bootcampx'
});

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));
const args1 = process.argv[2];
const args2 = process.argv[3];
console.log(args1, args2);
pool.query(
  
  `
SELECT students.id AS id, students.name AS name, cohorts.name AS cohort_name
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${args2};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});