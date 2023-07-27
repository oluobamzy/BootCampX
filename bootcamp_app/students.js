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
const cohortsName = process.argv[2];
const limit = process.argv[3];
const queryString =  
`
SELECT students.id AS id, students.name AS name, cohorts.name AS cohort_name
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`
const values = [`%${cohortsName}%`,limit]
pool.query(
  queryString,values
  )
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});