SELECT students.name, AVG(assignment_submissions.duration) as avg_duration FROM students
JOIN assignment_submissions ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY avg_duration desc;
