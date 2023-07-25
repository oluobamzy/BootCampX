SELECT cohorts.name, count(students) as students_count 
FROM cohorts 
JOIN students ON cohorts.id = cohort_id
GROUP BY cohorts.name
HAVING count(students) >= 18
order BY students_count;

