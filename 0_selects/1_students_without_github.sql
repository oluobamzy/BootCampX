SELECT id,name,email,cohort_id
 FROM students 
 WHERE github IS null 
 Order by cohort_id;